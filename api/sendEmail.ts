import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend('re_b2oKyVwg_4bCWWLEZ9GZY3SkwELqX6tLo');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { from, to, subject, html } = req.body;

    try {
      const response = await resend.emails.send({
        from,
        to,
        subject,
        html,
      });

      if (response.error) {
        return res.status(400).json({ error: response.error });
      }

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
