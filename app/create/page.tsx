import { CreateTask } from "../components/CreateTask";

<<<<<<< HEAD
export default function CreateTaskPage() {
  return <CreateTask />;
=======
import { TasksHeading } from "../Molecules/TasksHeading";
import { ActionButtom } from "../Atoms/ActionButton/ActionButtom";

import { TaskProps, useTaskStore } from "../store/tasksStore";
import { TaskStatusModal } from "../Molecules/TaskStatusModal";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { TaskModel } from "../models/taskModel.model";

export default function CreateTask() {
  const {
    showModal,
    task,
    taskName,
    tasksStoraged,
    setShowModal,
    setTask,
    setTaskName,
    setClearTasks,
    setTasksStoraged,
  } = useTaskStore();

  const taskModel = new TaskModel(new Date(), taskName, false);

  function handleTaskInput(event: React.FormEvent<HTMLInputElement>) {
    let inputValue = event.currentTarget.value;
    setTaskName(inputValue);
  }

  const createTask = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setTask(taskModel.create());
      setShowModal(true);
    },
    [taskName]
  );

  function saveNewTasksStoragedArray() {
    localStorage.setItem("tasksDB", JSON.stringify(tasksStoraged));
    setTaskName("");
  }

  useEffect(() => {
    if (!task) return;
    setTasksStoraged(task);
  }, [task]);

  useEffect(() => {
    saveNewTasksStoragedArray();
  }, [tasksStoraged]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-10 flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <section className="z-10">
          <TasksHeading text="Cadastrar Tarefa" />

          <div className="py-8">
            <form
              action=""
              className="flex justify-between gap-1"
              onSubmit={createTask}
            >
              <input
                className="border text-gray-500 b-gray-400 rounded-lg p-2 min-w-[500px] place"
                type="text"
                name="tarefa"
                id="tarefa"
                minLength={5}
                maxLength={100}
                placeholder="Digite o nome da tarefa"
                value={taskName}
                onChange={handleTaskInput}
                required
              />
              <ActionButtom
                type="submit"
                classes="bg-green-600 border-green-700 hover:bg-green-700"
                text="Cadastrar"
              />
            </form>
          </div>
          <footer className="p-5 text-center">
            <ActionButtom
              classes="hover:bg-red-600 bg-red-500 border-red-600"
              fn={setClearTasks}
              text="Limpar lista de tarefas"
            />
          </footer>
        </section>
      </div>
      <TaskStatusModal showModal={showModal} />
    </main>
  );
>>>>>>> 841e1438a842b9e6a2b13051b6641e97a500533a
}
