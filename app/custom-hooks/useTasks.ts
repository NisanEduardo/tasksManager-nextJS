import { TaskModel } from '../models/taskModel.model'

import { useTaskStore } from '../store/tasksStore'

export const useTasks = () => {
  const { setTask, setShowModal } = useTaskStore()

  const taskModel = new TaskModel()

  const createTask = (taskName: string) => {
    setTask(taskModel.create(new Date(), taskName, false));

    setShowModal(true);
  }

  return {
    createTask,
  }
}