import React, { useEffect, useState } from "react";

//include images into your bundle
import { Check, Edit, Trash2, X } from "lucide-react";
import todoListServices from "../services/todoListServices";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


//create your first component
const Home = () => {
	const { store, dispatch } = useGlobalReducer()

	const [todo, setTodo] = useState("")



	async function handleDeleteTask(id) {

		const data = await todoListServices.deteleTodo(id)
		if (data) {
			dispatch({ type: 'delete_task', payload: store.todosList.find(todo => todo.id === id) })
		}
		toast.success("Se ha eliminado correctamente")

	}




	async function handleAllDelete() {
		const promisesArray = store.todosList.map((todo) => {

			handleDeleteTask(todo.id)

		})
		await Promise.all(promisesArray)

		dispatch({type:'delete_all_task', payload:{}})
	}








	return (
		<div className="container d-flex flex-column  justify-content-center aling-items-center text-center">


			<h1 className="text-center mt-5">TODO LIST</h1>

			<div>
				<ul className="list-group text-start">

					{store.todosList?.map((todo) => {
						return (
							<li key={todo.id} className="list-group-item d-flex justify-content-between aling-items-center">
								<p className="m-0">{todo.label}</p>
								<div className="d-flex gap-2">
									<Link to={`edit-todo/${todo.id}`}>
										<Edit />
									</Link>
									<Trash2 color="red" onClick={() => handleDeleteTask(todo.id)} />
								</div>
							</li>

						)
					})}

				</ul>

				<div className=" d-flex justify-content-center gap-4">

					<button className="mt-2 btn btn-success">
						<Link to={'/create-todo'} className="text-white">
							CREAR TAREA
						</Link>
					</button>

					<button className="mt-2 btn btn-danger"
						onClick={handleAllDelete}>
						ELIMINAMOS TODAS LAS TAREAS
					</button>
				</div>
			</div>

		</div >
	);
};

export default Home;