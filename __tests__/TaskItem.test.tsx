import { render, screen } from "@testing-library/react";
import { TaskModel } from "../app/models/taskModel.model";
import { TasksItem } from "../app/components/task-item";

describe("Should test taskItem component funcionalities", () => {
  const taskModel = new TaskModel();
  const newTask = taskModel.create(
    new Date(),
    "Nova tarefa criada no teste",
    false
  );
  const completedTask = taskModel.create(
    new Date(),
    "Tarefa concluída criada no teste",
    true
  );

  it("Should render component without errors", () => {
    const tbodyEL = document.createElement("tbody");

    const { container } = render(<TasksItem task={newTask} />, {
      container: document.body.appendChild(tbodyEL),
    });

    expect(container).toBeTruthy();
  });

  it("should render created task on test", async () => {
    const table = document.createElement("table");
    const tBody = document.createElement("tbody");

    table.appendChild(tBody);

    render(<TasksItem task={newTask} />, {
      container: document.body.appendChild(tBody),
    });

    const tdTaskNameWrapper = await screen.findByTestId("taskName");

    expect(tdTaskNameWrapper.innerHTML).toMatch(/Nova tarefa criada no teste/);
  });

  it("should verify if completed task has the correct style", () => {
    const table = document.createElement("table");
    const tBody = document.createElement("tbody");

    table.appendChild(tBody);

    const { getByTestId } = render(<TasksItem task={completedTask} />, {
      container: document.body.appendChild(tBody),
    });

    expect(getByTestId("taskName").className).toMatch("line-through");
  });
});
