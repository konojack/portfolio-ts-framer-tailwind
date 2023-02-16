import { PageInfo, Project } from '@/typings';

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;
  console.log(
    '🚀 ~ file: fetchPageInfo.ts:10 ~ fetchPageInfo ~ pageInfo',
    pageInfo
  );

  return pageInfo;
};
