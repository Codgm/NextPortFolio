import Image from "next/image";

export default function ProjectItem({ projects }) {
    return (
        <div>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}

function ProjectCard({ project }) {
    const title = project.properties.이름.title[0]?.plain_text || "제목 없음";
    const github = project.properties.GitHub.files[0]?.external?.url || "#";
    const description = project.properties.설명.rich_text[0]?.plain_text || "설명 없음";
    const imgSrc = project.cover?.external?.url;
    const tags = project.properties.태그.multi_select;
    const start = project.properties.workperiod?.date?.start;
    const end = project.properties.workperiod?.date?.end;
  

    const calculatedPeriod = (start, end) => {
        if (!start || !end) return "미정";

        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        const startDate = new Date(startDateStringArray[0], startDateStringArray[1] - 1, startDateStringArray[2]);
        const endDate = new Date(endDateStringArray[0], endDateStringArray[1] - 1, endDateStringArray[2]);
        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        return result;
    };

    return (
        <div className="project-card">
            {imgSrc != undefined ?<Image
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width={800}
                height={400}
                quality={100}
            /> : null}
            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={github} target="_blank" rel="noopener noreferrer">GitHub Link</a>
                <p className="my-1">
                    workPeriod : {start} ~ {end} ({calculatedPeriod(start, end)}일)
                </p>
                <div className="flex items-start mt-2">
                    {tags.map((tag) => (
                        <span className="px-2 py-1 mr-2 rounded-md bg-blue-200 text-blue-800" key={tag.id}>{tag.name}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}