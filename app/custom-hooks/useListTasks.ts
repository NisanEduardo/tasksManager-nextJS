import { useLocalStorage } from "./useLocalStorage";

export const ITEMS_PER_PAGE = 2;

type UseListTasksProps = {
  currPage: number
}

export const useListTasks = ({
  currPage
}: UseListTasksProps) => {
  const { hasLocalStorageTasks } = useLocalStorage()

  const tasksToShowInterval = {
    start: (currPage - 1) * ITEMS_PER_PAGE,
    ITEMS_PER_PAGE,
  };



  const tasksPerPageList = () => {
    if (!hasLocalStorageTasks()) return

    return hasLocalStorageTasks().splice(
      tasksToShowInterval.start,
      tasksToShowInterval.ITEMS_PER_PAGE
    );
  }



  return {
    tasksToShowInterval,
    tasksPerPageList
  }
}