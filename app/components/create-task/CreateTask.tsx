"use client";

import { useEffect } from "react";
import { useTaskStore } from "../../store/tasksStore";
import { TasksHeading } from "../../Molecules/TasksHeading";
import { TaskStatusModal } from "../../Molecules/TaskStatusModal";
import { CreateTaskForm } from "../../Molecules/CreateTaskForm";
import { TaskModel } from "../../models/taskModel.model";
import { TasksFooter } from "@/app/Molecules/TasksFooter";

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

  const taskModel = new TaskModel(new Date(), taskName, false);

  function populateStoragedTasks() {
    if (localStorage.getItem("tasksDB") === "") return;

    setTasksStoraged(JSON.parse(localStorage.getItem("tasksDB") || ""));
  }

  function createTask() {
    setTask(taskModel.create());

    // setTask({
    //   id: new Date(),
    //   name: "comprar pão",
    //   completed: true,
    // });
    setShowModal(true);
  }

  useEffect(() => {
    populateStoragedTasks;
  }, []);

  useEffect(() => {
    if (!task) return;
    setTasksStoraged(task);
  }, [setTasksStoraged, task]);

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
