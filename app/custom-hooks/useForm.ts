
import { useTaskStore } from '../store/tasksStore'


export const useForm = () => {
  const { setTaskName } = useTaskStore()

  function handleTaskInput(event: React.FormEvent<HTMLInputElement>) {
    let inputValue = event.currentTarget.value;
    setTaskName(inputValue);
  }


  return {
    handleTaskInput
  }
}