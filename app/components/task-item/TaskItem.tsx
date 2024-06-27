import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faEdit } from "@fortawesome/free-solid-svg-icons";

import { TaskProps, useTaskStore } from "../../store/tasksStore";
import { ActionButtom } from "@/app/Atoms/ActionButton/ActionButtom";

type TasksItemProps = {
  task: TaskProps;
};

export const TasksItem = ({ task }: TasksItemProps) => {
  function checkAsCompleted(task: TaskProps) {
    return task.completed ? "line-through" : "none";
  }

  const { setShowModal, setTask } = useTaskStore();

  return (
    <tr className="relative">
      <td
        data-testid="taskName"
        className={`${checkAsCompleted(task)} pt-5`}
        width="75%"
      >
        {task.name}
      </td>
      <td className="text-right pt-5">
        <ActionButtom
          dataTestid="openDialogCompletedTask"
          classes="border-0"
          text="Finalizou?"
          fn={() => {
            setShowModal(true);
            setTask(task);
          }}
        >
          <FontAwesomeIcon icon={faClipboardCheck} color="rgba(21,128,61,1)" />
        </ActionButtom>
        <a
          className={`${
            task.completed ? "hidden" : "inline-block"
          } text-center`}
          href={`/update/${task.id}`}
        >
          <FontAwesomeIcon icon={faEdit} />
        </a>
      </td>
    </tr>
  );
};
