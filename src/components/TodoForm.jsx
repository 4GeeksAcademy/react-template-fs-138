import { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect } from "react"

export default function TodoForm({ handleOnSumbit, todoId }) {
	const { store } = useGlobalReducer()

	const [todo, setTodo] = useState('')

	useEffect(() => {
		console.log(store.todosList)
		const existTodo = store.todosList.find(todo => todo && todo.id === Number(todoId))

		if (existTodo) {
			setTodo(existTodo.label)
		}

	}, [store.todosList])

	return (
		<div className="container mx-auto mt-4">
			<form onSubmit={(event) => handleOnSumbit(event, todo, setTodo, todoId)}>
				<input type="text" className="form-control" placeholder="Añadir tarea" value={todo} onChange={(e) => setTodo(e.target.value)} />
			</form>
		</div>
	)
}	