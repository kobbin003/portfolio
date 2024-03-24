import React from "react";
import { PortableText } from "@portabletext/react";
type Props = { _id: string; title: string; description: any };

const ProjectCard = ({ _id, title, description }: Props) => {
	return (
		<div key={_id} className="border my-2">
			<div>{title}</div>
			<PortableText value={description} />
		</div>
	);
};

export default ProjectCard;
