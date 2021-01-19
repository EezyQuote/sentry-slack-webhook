import { NextApiRequest, NextApiResponse } from 'next';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const crypto = require('crypto');

// function verifySignature(request, secret = process.env.SENTRY_KEY || '') {
//   const hmac = crypto.createHmac('sha256', secret);
//   hmac.update(JSON.stringify(request.body), 'utf8');
//   const digest = hmac.digest('hex');
//   return digest === request.headers['Sentry-Hook-Signature'];
// }

const parseBody = (request): SentryPayload => {
  try {
    return JSON.parse(request.body);
  } catch (error) {
    return request.body;
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // const valid =
    //   process.env.NODE_ENV === 'development' || verifySignature(req);
    // if (!valid) {
    //   throw new Error('Request is not valid');
    // } else {
    const body = parseBody(req);
    console.log(body);
    const paths = req.query.paths;
    const path = typeof paths === 'string' ? paths : paths?.join?.('/');
    const result = await fetch(`https://hooks.slack.com/services/${path}`, {
      method: 'POST',
      body: JSON.stringify({
        text: `${body.message}, <${body.url}|${body.culprit}> `,
      }),
    });
    res.status(200).json({ ok: true });
    // }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message || 'api error' });
  }
};
