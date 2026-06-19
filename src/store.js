export const initialStore = () => {
  return {
    todosList: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'set_all_task':

      const todoListData = action.payload

      return {
        ...store,
        todosList: todoListData
      }

    case 'add_new_task':
      const newTask = action.payload

      const todoListDataWithNewTodo = [...store.todosList, newTask]

      return {
        ...store,
        todosList: todoListDataWithNewTodo
      }



    case 'edit_task':
      const editTask = action.payload

      const editedTodosList = store.todosList.map(todo => {
        if (todo.id === editTask.id) {
          return editTask
        }
        return todo
      })

      return {
        ...store,
        todosList: editedTodosList
      }

    case 'delete_task':
      const todoDeleted = action.payload

      return {
        ...store,
        todosList: [...store.todosList.filter((todo) => {
          return todo.id !== todoDeleted.id
        })]
      }

    case 'delete_all_task':
      return {
        ...store,
        todosList: []
      }


    default:
      throw Error('Unknown action.');
  }
}
