import { ContactsFormData } from "@/components/Form";
import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const data: ContactsFormData = await request.json();
    if (data.fio && data.number) {
      const sendMailResult = await transporter.sendMail({
        from: `MTDKA <${process.env.MAIL_RECIPIENT}>`,
        to: process.env.MAIL_RECIPIENT_USERNAME,
        subject: "Заявка с сайта МТДКА",
        text: "Данные из формы.",
        html: `<div style='display: flex; flex-direction: column;'><p>ФИО: ${
          data.fio
        }</p>
        <p>Номер: ${data.number}</p>
        <p>Комментарий: ${data.comment ? data.comment : "-"}</p></div>`,
      });

      return NextResponse.json({ result: sendMailResult });
    } else {
      throw new Error("Неполные данные");
    }
  } catch (error) {
    return NextResponse.json({
      message: "Не удалось отправить письмо, попробуйте еще раз.",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
