import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { CreateTask } from "../app/components/create-task/CreateTask";
import { CreateTaskForm } from "@/app/Molecules/CreateTaskForm";

describe("create task component tests", () => {
  it("should render component without errors", () => {
    render(<CreateTask />);

    expect(screen.getByText("Cadastrar Tarefa")).toBeInTheDocument;
  });

  it("should call submit form function", async () => {
    const mockSubmit = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(
      <CreateTaskForm onSubmit={mockSubmit} />
    );

    fireEvent.change(getByPlaceholderText("Digite o nome da tarefa"), {
      target: { value: "Joe Doe" },
    });

    fireEvent.submit(getByTestId("createTaskForm"));

    expect(mockSubmit).toHaveBeenCalled();
  });
});
