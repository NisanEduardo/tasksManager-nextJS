export class TaskModel {
  id: Date;
  name: string;
  completed: boolean;

  constructor(id: Date, name: string, completed: boolean) {
    this.id = id;
    this.name = name;
    this.completed = completed;
  }

  create() {
    return {
      id: this.id,
      name: this.name,
      completed: this.completed,
    };
  }
}
