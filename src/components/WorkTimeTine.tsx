import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@constants";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkTimeTine = () => {
	return (
		<VerticalTimeline lineColor="#6ee7b7">
			{experiences.map((experience, key) => (
				<VerticalTimelineElement
					key={key}
					date={experience.date}
					icon={<Briefcase className="text-emerald-500" />}
					iconStyle={{ background: "#d1fae5" }}
					visible={true}>
					<div>
						<h3 className="text-slate-950 dark:text-white font-medium">{experience.title}</h3>
						<p className="text-gray-600 font-medium font-base !mt-1">{experience.company_name}</p>
					</div>

					<ul className="my-5 list-disc ml-5 space-y-2">
						{experience.points.map((point, key) => (
							<li
								className="text-gray-500 font-normal pl-1 text-sm"
								key={key}>
								{point}
							</li>
						))}
					</ul>
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
};

export default WorkTimeTine;
