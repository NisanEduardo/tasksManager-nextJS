"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TasksHeading } from "@/app/Molecules/TasksHeading";

import { TaskProps, useTaskStore } from "../../store/tasksStore";
import { TasksFooter } from "@/app/Molecules/TasksFooter";
import { TasksItem } from "../task-item/TaskItem";

export function getStoredTasks() {
  if (typeof window !== "undefined") {
    const storedTasks = localStorage.getItem("tasksDB");
    if (storedTasks !== null) {
      try {
        const tasksItems = JSON.parse(storedTasks);
        return tasksItems;
      } catch (error) {
        console.error(error);
      }
    }
  }
  return [];
}

export const ListTasks = () => {
  const storedTasks = getStoredTasks();

  return (
    <>
      <TasksHeading text="Tarefas a fazer" />

      <div className="py-8">
        <table className="w-full min-w-[500px] mt-10 rounded-lg">
          <thead className="border-gray-200 border-b">
            <tr className="">
              <th className="text-white text-xl text-left pb-5">Tarefa</th>
              <th className="min-w-[200px] pb-5">
                <a
                  href="/create"
                  className="min-w-20 flex justify-center items-center gap-2 text-white font-normal py-2 px-5 rounded-md border border-green-800 bg-green-700 hover:bg-green-600 transition-all"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  Nova Tarefa
                </a>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {storedTasks.map((task: TaskProps) => (
              <TasksItem key={task.name} task={task} />
            ))}
          </tbody>
        </table>
      </div>

      <TasksFooter />
    </>
  );
};