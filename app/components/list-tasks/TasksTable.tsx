import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TasksTableBody } from "./TasksTableBody";

import { useTaskStore } from "../../store/tasksStore";
import { useForm } from "../../custom-hooks/useForm";

export const TasksTable = () => {
  const { taskName } = useTaskStore();
  const { handleTaskInput } = useForm();

  return (
    <table className="w-full min-w-[600px] mt-10 rounded-lg">
      <thead className="border-gray-200 border-b">
        <tr className="">
          <th className="text-white text-xl text-left pb-5">Tarefa</th>
          <th className="min-w-[300px] pb-5">
            <a
              href="/create"
              className="flex justify-center items-center gap-2 text-white font-normal py-2 px-5 rounded-md border border-green-800 bg-green-700 hover:bg-green-600 transition-all"
            >
              <FontAwesomeIcon icon={faPlus} />
              Create Task
            </a>
          </th>
        </tr>
        <tr>
          <th className="py-5 text-left">
            <h2>Buscar tarefa:</h2>
          </th>
          <th className="py-5">
            <form action="">
              <input
                type="text"
                name="taskSearch"
                id="taskSearch"
                value={taskName}
                onChange={handleTaskInput}
                className="border border-gray-400 bg-transparent placeholder:text-gray-300 rounded-md w-full px-2"
              />
            </form>
          </th>
        </tr>
      </thead>
      <TasksTableBody />
    </table>
  );
};
