import { useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import useGlobalReducer from "../hooks/useGlobalReducer";
import todoListServices from "../services/todoListServices";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function CreateTodoPage(){
const { dispatch} =useGlobalReducer()
const navigate = useNavigate()

	async function handleAddTask(event,todo,setTodo) {
		event.preventDefault()

        const [responseData,error] = await todoListServices.createTask(todo)    

        if(error){
            toast.error(error.message)
            return navigate('/')   
        }

        console.log(responseData)
        dispatch({type:'add_new_task',payload:responseData})
		setTodo("")
        navigate('/')
        toast.success("Se ha creado la tarea correctamente")
	}

    return(
    <>
    <TodoForm  handleOnSumbit={handleAddTask}/>
    <Link to = {'/'} className="d-flex justify-content-center">
     Volver al listado de tareas
    </Link>
    </>

    )
}