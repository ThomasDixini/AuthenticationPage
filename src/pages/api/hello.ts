import { NextApiRequest, NextApiResponse } from "next";
import {  createTransport } from 'nodemailer'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let transporter = createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "thomas.dixini@alunos.unis.edu.br",
            pass: "26032002"
        }
    })

    transporter.sendMail({
        from: "Thomas Dixini <thomas.dixini@alunos.unis.edu.br>",
        to: "thomasdixini@gmail.com",
        subject: "Just testing you",
        text: "Im just testing you",
        html: "<a href='http://localhost:3000' > Deu certo!"
    })

    return res.status(200).send({ message: "Email sent" })
}