"use client";

import { TasksHeading } from "@/app/Molecules/TasksHeading";

import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTaskStore } from "../../store/tasksStore";

export const ListTasksHeader = () => {
  const { currTasks, setCurrTasks } = useTaskStore();

  const handleSortTasks = () => {
    const sortedTasksStoraged = currTasks.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return -1;
      }
    });

    setCurrTasks(sortedTasksStoraged);
  };

  return (
    <button
      type="button"
      className="text-center w-full hover:opacity-70 transition flex gap-5 items-center justify-center"
      onClick={handleSortTasks}
    >
      <TasksHeading text="Tarefas a fazer" />
      <FontAwesomeIcon
        icon={faSort}
        className="flex justify-center items-center"
      />
    </button>
  );
};
