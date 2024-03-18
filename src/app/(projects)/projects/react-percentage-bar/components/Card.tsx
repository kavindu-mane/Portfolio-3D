import React from "react";
import Title from "./Title";
import CodeArea from "./CodeArea";

type CardProps = {
  children: React.ReactNode;
  text: string;
  title: string;
};

const Card = ({ children, text, title }: CardProps) => {
  return (
    <div
      className={
        "mx-2 mt-4 flex w-full max-w-[23rem] flex-col items-center justify-between rounded-xl bg-white shadow-2xl duration-300 ease-in hover:-translate-y-5 hover:bg-sky-50 sm:mx-4"
      }
    >
      <Title title={title} />
      {children}
      <div className="flex w-full">
        <CodeArea value={text} />
      </div>
    </div>
  );
};

export default Card;
