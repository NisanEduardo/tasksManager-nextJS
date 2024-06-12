export function useLocalStorage() {
  function hasLocalStorageTasks() {
    const storedData = window.localStorage.getItem("tasksDB");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);

        return parsedData
      } catch (error) {
        console.error(error);
      }

      return []
    }
  }

  return {
    hasLocalStorageTasks
  }
}