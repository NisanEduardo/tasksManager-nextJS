import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

// import { CompleteTask } from "./CompleteTask";

import { TaskProps, useTaskStore } from "../../store/tasksStore";
import { CompleteTask } from "./CompleteTask";

type TasksItemProps = {
  task: TaskProps;
};

export const TasksItem = ({ task }: TasksItemProps) => {
  function checkAsCompleted(task) {
    return task.completed ? "line-through" : "none";
  }

  return (
    <tr key={task.name} className="">
      <td
        data-testid="taskName"
        className={`${checkAsCompleted(task)} pt-5`}
        width="75%"
      >
        {task.name}
      </td>
      <td className="text-right pt-5">
        <CompleteTask
          task={task}
          classes={task.completed ? "hidden" : "inline-block mr-3"}
        />
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
