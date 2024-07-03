"use client";

import { useEffect } from "react";
import { useTaskStore } from "../../store/tasksStore";
import { TasksHeading } from "../../Molecules/TasksHeading";
import { TaskStatusModal } from "../../Molecules/TaskStatusModal";
import { CreateTaskForm } from "../../Molecules/CreateTaskForm";
import { TasksFooter } from "@/app/Molecules/TasksFooter";

export const createTask = () => {
  const { setShowModal } = useTaskStore();

  setShowModal(true);
};

export const CreateTask = () => {
  const { task, tasksStoraged, showModal, setTasksStoraged } = useTaskStore();

  useEffect(() => {
    if (!task) return;

    setTasksStoraged([...tasksStoraged, task]);
  }, [task]);

  useEffect(() => {
    localStorage.setItem("tasksDB", JSON.stringify(tasksStoraged));
  }, [tasksStoraged]);

  return (
    <>
      <TasksHeading text="Cadastrar Tarefa" />

      <div className="py-8">
        <CreateTaskForm />
      </div>
      <TasksFooter />

      {showModal && <TaskStatusModal />}
    </>
  );
};
