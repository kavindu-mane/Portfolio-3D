import { useInView } from "react-intersection-observer";

const MultipleObserver = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="">
      {inView ? children : ""}
    </div>
  );
};
export default MultipleObserver;
