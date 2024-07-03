jest.mock("../app/store/tasksStore");

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { CreateTaskForm } from "@/app/Molecules/CreateTaskForm";

import { useTaskStore } from "../app/store/tasksStore";

function createTaskMock(name: string, showModal: boolean) {
  useTaskStore.setState({ taskName: name, showModal: showModal });
}

describe("create task component tests", () => {
  beforeEach(() => {
    createTaskMock("Teste", true);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render component without errors", () => {
    render(<CreateTaskForm />);

    expect(screen.getByText("Cadastrar Tarefa")).toBeInTheDocument();
  });

  it("should call store setTask", async () => {
    expect(useTaskStore.setState).toBeCalledTimes(1);
  });

  it("should call store setTask with name passed as props", async () => {
    expect(useTaskStore.setState).toBeCalledWith({
      taskName: "Teste",
      showModal: true,
    });
  });
});
