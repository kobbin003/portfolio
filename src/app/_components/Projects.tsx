import React from "react";
import { client } from "@/utils/configSanity";
import ProjectCard from "./ProjectCard";

type TProjects = {
	title: string;
	_createdAt: string;
	_id: string;
	description: any;
};

// export const dynamic = "force-dynamic";
async function getData(): Promise<TProjects[]> {
	// const query = ``;
	const query = `*[_type == 'portfolio']`;
	return await client.fetch(query, {}, { next: { revalidate: 30 } });
}

type Props = {};

const Projects = async (props: Props) => {
	const data = await getData();
	return (
		<div>
			{data &&
				data.map(({ _id, title, description }) => (
					<ProjectCard
						key={_id}
						_id={_id}
						title={title}
						description={description}
					/>
				))}
		</div>
	);
};

export default Projects;
