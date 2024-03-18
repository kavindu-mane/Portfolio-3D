const Title = ({ title } : {title : string}) => {
  return (
    <h1 className="mb-8 w-full rounded-t-xl bg-slate-600 py-3 text-center text-xl text-white">
      {title}
    </h1>
  );
};

export default Title;
