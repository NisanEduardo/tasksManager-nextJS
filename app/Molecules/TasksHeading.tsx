type TTasksHeading = {
  text: string;
};

export const TasksHeading = ({ text }: TTasksHeading) => {
  return (
    <h1 className="text-center text-white text-[30px] font-bold">{text}</h1>
  );
};
