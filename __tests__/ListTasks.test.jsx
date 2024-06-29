import { render } from "@testing-library/react";

import { ListTasks } from "../app/components/list-tasks/ListTasks";

describe("List tasks test", () => {
  it("Should render component without errors", () => {
    render(<ListTasks />);
  });
});
