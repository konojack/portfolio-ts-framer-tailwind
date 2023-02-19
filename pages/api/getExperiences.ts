import sanityClient from '../../lib/sanity';
import { groq } from 'next-sanity';
import { NextApiRequest, NextApiResponse } from 'next';
import { Experience } from '@/typings';

const query = groq`
*[_type == "experience"]{
  ...,
  technologies[]->
} | order(dateStarted asc)
`;

type Data = {
  experiences: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(query);

  res.status(200).json({ experiences });
}
