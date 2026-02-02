/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~/server/api/contact.post.ts
 * @version:    1.0.0
 * @createDate: 2026 Feb 02
 * @createTime: 14:57
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * TODO: Create description here
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.0.0, 20260202-14:57
 * Initial creation and release of contact.post.ts
 *
 * ================================================================================
 */

import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  // 1. Read configuration & body
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const { name, email, message } = body

  // 2. Validate inputs
  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }

  // 3. Setup Transporter (Zoho SMTP)
  const transporter = nodemailer.createTransport({
    host: config.zohoSmtpHost,
    port: Number(config.zohoSmtpPort),
    secure: config.zohoSmtpSecure === 'SSL', // true if SSL
    auth: {
      user: config.zohoUser,
      pass: config.zohoPassword
    }
  })

  // 4. Prepare Email 1: Notification to Admin (You)
  const adminMailOptions = {
    from: `"Site Contact Form" <${config.zohoUser}>`,
    to: config.zohoUser, // Send to site admin
    replyTo: email, // Reply goes to the user
    subject: `New Message from ${name}`,
    text: `You have received a new message.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  }

  // 5. Prepare Email 2: Confirmation to User
  const userMailOptions = {
    from: `"Holistic Therapy Clinic" <${config.zohoUser}>`,
    to: email, // Send to the user
    subject: `We've received your message`,
    text: `Hi ${name},\n\nThank you for getting in touch. We have received your message and will get back to you shortly.\n\nBest regards,\nHolistic Therapy Clinic`,
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for getting in touch. We have received your message and will get back to you shortly.</p>
      <p><strong>Your Message:</strong><br/>${message.replace(/\n/g, '<br>')}</p>
      <br/>
      <p>Best regards,</p>
      <p><strong>Holistic Therapy Clinic</strong></p>
    `
  }

  // 6. Send Emails
  try {
    // Send both emails. We await them to ensure success.
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ])

    return { success: true, message: 'Emails sent successfully' }
  } catch (error: any) {
    console.error('Email sending failed:', error)
    // Don't leak technical details to client, but log them for debugging
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email. Please try again later.'
    })
  }
})
