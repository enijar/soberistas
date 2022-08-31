import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  pong: boolean;
};

export default function ping(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ pong: true });
}
