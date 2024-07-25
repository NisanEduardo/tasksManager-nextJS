import { useEffect } from "react";
import { TaskProps, useTaskStore } from "../../store/tasksStore";
import { TasksItem } from "../task-item";
import { useListTasks } from "@/app/custom-hooks/useListTasks";

export const TasksTableBody = () => {
  const { currTasks, currPage, setCurrTasks } = useTaskStore();

  const { tasksPerPageList } = useListTasks({ currPage });

  useEffect(() => {
    setCurrTasks(tasksPerPageList());
  }, [currPage]);

  return (
    <tbody className="">
      {currTasks &&
        currTasks.map((task: TaskProps, index: number) => (
          <TasksItem key={`${task.name}-${index}`} task={task} />
        ))}
    </tbody>
  );
};
