import Layout from "../components/layout";
import {TOKEN, DATABASE_ID} from '@/config/notion'
import ProjectItem from "../components/project-item";


export default async function Projects() {
  const projects = await getData();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 :
          <span className="pl-4 dark:text-sky-500">{projects.length}</span>
        </h1>
        <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
          <ProjectItem projects={projects} />
        </div>
      </div>
    </Layout>
  );
}

async function getData() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
      'Cache-Control': 'no-cache',
      'Cookie':"__cf_bm=NBR7Bos4pEcefQKrWYFp7352Qwut9sVsQf30kQA8gJk-1718785432-1.0.1.1-9mPMgHVX6aQVel31mI3Tmn9Ue9MMQJRDaWgYeSPgljVwOElMy0vheBJJWyYTvAQEorXt1o8A11e5nlJHnTS3Ww"
    },
    body: JSON.stringify({
      "sorts": [
        {
        "property": "이름",
        "direction": "ascending"
        }
      ],
    }),
    redirect: 'follow'
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
  const projects = await res.json()
  console.log(projects.results)

  return projects.results
} 


