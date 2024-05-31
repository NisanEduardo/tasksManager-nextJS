import "@testing-library/jest-dom";
import {
  act,
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import { CreateTask } from "../app/components/CreateTask";

import { TaskStatusModal } from "../app/Molecules/TaskStatusModal";

describe("create task component tests", () => {
  it("should render component without errors", () => {
    render(<CreateTask />);

    expect(screen.getByText("Cadastrar Tarefa")).toBeInTheDocument;
  });

  it("should pass", async () => {
    render(<CreateTask />);

    const btnCreate = screen.getByText("Cadastrar");

    fireEvent.click(btnCreate);

    expect(screen.getByText("Status da tarefa")).toBeInTheDocument();
  });
});
