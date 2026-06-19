import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { useEffect } from "react"
import todoListServices from "../services/todoListServices"
import useGlobalReducer from "../hooks/useGlobalReducer"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const { dispatch } = useGlobalReducer()

    useEffect(() => {
        async function fetchGetTodoList() {
            const data = await todoListServices.getAllTodoList()
            dispatch({ type: 'set_all_task', payload: data.todos })

        }

        fetchGetTodoList()
    }, [])
    
    return (
        <>
            <Outlet />
        </>
    )
}