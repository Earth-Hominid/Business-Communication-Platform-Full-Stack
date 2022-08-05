import * as cookie from 'cookie';
import { API_URL } from '@/config/index';

import type { NextApiRequest, NextApiResponse } from 'next';

const strapiUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not Authorized' });
      return;
    }
    const { token } = cookie.parse(req.headers.cookie);

    const strapiResponse = await fetch(`${API_URL}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = await strapiResponse.json();

    if (strapiResponse.ok) {
      res.status(200).json({ user });
    } else {
      res.status(403).json({ message: 'Not Authorized' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default strapiUser;
