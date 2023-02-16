import sanityClient from '../../lib/sanity';
import { groq } from 'next-sanity';
import { NextApiRequest, NextApiResponse } from 'next';
import { Skill } from '@/typings';

sanityClient;

const query = groq`*[_type == "skill"]`;

type Data = {
  skills: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skill[] = await sanityClient.fetch(query);

  res.status(200).json({ skills });
}
