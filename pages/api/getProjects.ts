import sanityClient from '../../lib/sanity';
import { groq } from 'next-sanity';
import { NextApiRequest, NextApiResponse } from 'next';
import { Project } from '@/typings';

sanityClient;

const query = groq`
*[_type == "project"]{
    ...,
    technologies[]->
}
`;

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
