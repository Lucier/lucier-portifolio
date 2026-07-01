import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Lucier" <${process.env.SMTP_USER}>`,
      to: 'lucierflima@gmail.com',
      replyTo: email,
      subject: `[Portfolio] Nova mensagem de ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
          <h2 style="color:#783bff;margin-bottom:4px">Nova mensagem do Portfolio</h2>
          <p style="color:#64748b;margin-top:0;font-size:14px">Recebida pelo formulário de contato</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0"/>
          <table style="width:100%;border-collapse:collapse;font-size:15px">
            <tr><td style="padding:8px 0;font-weight:600;width:80px">Nome</td><td>${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600">E-mail</td><td><a href="mailto:${email}">${email}</a></td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0"/>
          <p style="font-weight:600;margin-bottom:6px">Mensagem:</p>
          <p style="background:#f8fafc;border-left:4px solid #783bff;padding:12px 16px;margin:0;border-radius:4px;white-space:pre-wrap">${message}</p>
        </div>
      `,
    })
  } catch (err) {
    console.error('[contact] sendMail error:', err)
    return NextResponse.json({ error: 'Falha ao enviar o email.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
