import { Briefcase } from "lucide-react";
import { experiences } from "@constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkTimeline = () => {
  return (
    <VerticalTimeline lineColor="#6ee7b7">
      {experiences.map((experience, key) => (
        <VerticalTimelineElement
          key={key}
          date={experience.date}
          dateClassName="text-white !opacity-100"
          icon={<Briefcase className="text-white" />}
          iconStyle={{ background: "#ffffff30", backdropFilter: "blur(10px)" }}
          visible={true}
          contentStyle={{
            background: "#ffffff10",
            border: "1.5px solid rgba(251 ,191 ,36 , 0.5)",
            backdropFilter: "blur(5px)",
            outline: "none",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(251 191 36)",
          }}
        >
          <div>
            <h3 className="font-medium text-white">{experience.title}</h3>
            <p className="font-base !mt-1 font-medium text-amber-300">
              {experience.company_name}
            </p>
          </div>

          <ul className="my-5 ml-5 list-disc space-y-2">
            {experience.points.map((point, key) => (
              <li className="pl-1 text-sm font-normal text-gray-200" key={key}>
                {point}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default WorkTimeline;
