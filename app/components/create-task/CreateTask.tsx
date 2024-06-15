"use client";

import { useEffect } from "react";
import { TaskProps, useTaskStore } from "../../store/tasksStore";
import { TasksHeading } from "../../Molecules/TasksHeading";
import { TaskStatusModal } from "../../Molecules/TaskStatusModal";
import { CreateTaskForm } from "../../Molecules/CreateTaskForm";
import { TaskModel } from "../../models/taskModel.model";
import { TasksFooter } from "@/app/Molecules/TasksFooter";
import { useLocalStorage } from "../../custom-hooks/useLocalStorage";

export const createTask = () => {
  const { setShowModal } = useTaskStore();

  setShowModal(true);
};

export const CreateTask = () => {
  const {
    task,
    tasksStoraged,
    taskName,
    showModal,
    setShowModal,
    setTask,
    setTasksStoraged,
  } = useTaskStore();

  const { hasLocalStorageTasks } = useLocalStorage();

  const taskModel = new TaskModel(new Date(), taskName, false);

  function createTask() {
    setTask(taskModel.create());

    setShowModal(true);
  }

  useEffect(() => {
    setTasksStoraged(hasLocalStorageTasks());
  }, []);

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
        <CreateTaskForm onSubmit={createTask} />
      </div>
      <TasksFooter />

      {showModal && <TaskStatusModal />}
    </>
  );
};
