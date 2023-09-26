// pages/api/subscribe.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body;
  
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }
  
      try {
        const response = await fetch(
          `https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
          {
            method: 'POST',
            headers: {
              Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email_address: email,
              status: 'subscribed',
            }),
          }
        );
  
        if (!response.ok) throw new Error(response.statusText);
  
        return res.status(200).json({ success: true });
      } catch (error) {
        return res.status(500).json({ error: 'Error subscribing to newsletter' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end('Method Not Allowed');
    }
  }
  