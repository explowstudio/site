import { ContactEmailTemplate } from "@/ui/_templates/ContactEmailTemplate";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, name, ...rest } = req.body;

    const data = await resend.emails.send({
      from: `${name} <contato@explow.studio>`,
      to: ["contato@explow.studio"],
      subject: "Quero criar um projeto incrível com a Explow",
      react: ContactEmailTemplate({ email, name, ...rest }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
