export class TaskModel {
  constructor() { }

  create(id: Date, name: string, completed: boolean) {
    return {
      id,
      name,
      completed
    };
  }
}
