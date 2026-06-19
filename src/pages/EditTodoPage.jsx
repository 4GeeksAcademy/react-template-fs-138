import { Link } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import { useParams } from "react-router-dom";
import todoListServices from "../services/todoListServices";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export default function EditTodoPage(){
    const { dispatch} =useGlobalReducer()
    const navigate =useNavigate()
    const params = useParams()
    const {id}= params


    async function handleEditTask(event,todo,setTodo,id) {
		event.preventDefault()

        const data = await todoListServices.editTask(id,todo)    
        console.log(data)
        dispatch({type:'edit_task',payload:data})
        navigate('/')
	}

    return(    <>
        <TodoForm  handleOnSumbit={handleEditTask} todoId={id}/>
        <Link to = {'/'} className="d-flex justify-content-center">
         Cancelar edicion de la tarea
        </Link>
        </>)
}

