"use client";

import { useEffect, useState } from "react";
import { useTaskStore, TaskProps } from "../../store/tasksStore";
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
    setTasksStoraged,
    setShowModal,
    setTask,
  } = useTaskStore();

  const { hasLocalStorageTasks } = useLocalStorage();

  const taskModel = new TaskModel();

  function createTask() {
    setTask(taskModel.create(new Date(), taskName, false));

    setShowModal(true);
  }

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
