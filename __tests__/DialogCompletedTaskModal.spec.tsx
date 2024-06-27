import { fireEvent, getByText, render, screen } from "@testing-library/react";

import { TaskModel } from "../app/models/taskModel.model";

import { DialogCompletedTaskModal } from "../app/Molecules/DialogCompletedTaskModal";
import { TasksItem } from "../app/components/task-item";

describe("Dialog to mark task a completed or not", () => {
  const taskModel = new TaskModel();
  const taskForDialogTest = taskModel.create(
    new Date(),
    "Task for dialog test",
    false
  );

  it("should render component without errors", () => {
    const DialogComponent = render(
      <DialogCompletedTaskModal currTask={taskForDialogTest} />
    );

    expect(DialogComponent).toBeTruthy();
  });

  it("should dialog show the correct current task name", async () => {
    render(<DialogCompletedTaskModal currTask={taskForDialogTest} />);

    expect(screen.getByText("Task for dialog test")).toBeTruthy();
  });

  // it("should mark current task as completed", () => {
  //   localStorage.setItem('tasksDB', JSON.stringify(taskForDialogTest))

  //   render(<DialogCompletedTaskModal currTask={taskForDialogTest} />);

  //   const opneModalButton = container.querySelector(".handleOpenModalAction");
  //   const markAsCompleteTaskButon = container.querySelector(
  //     "[data-testid=completeTaskYes]"
  //   );

  //   fireEvent.click(opneModalButton);
  //   fireEvent.click(markAsCompleteTaskButon);

  //   const updatedLocalStorage = JSON.parse(localStorage["tasks"]);

  //   console.log("updatedLocalStorage", updatedLocalStorage);

  //   // expect(updatedLocalStorage[0].completed).toBe(true);
  // });
});
