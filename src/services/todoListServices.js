
const userName = "AlvaroMartin"


async function getAllTodoList() {
    const response = await fetch(`https://playground.4geeks.com/todo/users/${userName}`)
    if (!response.ok) {
        await createUser()
    }
    const data = await response.json()
    return data
}

async function createUser() {
    const response = await fetch(`https://playground.4geeks.com/todo/users/${userName}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})

    })
    if (response.ok === true) {
        return await getAllTodoList()
    }

}


//DEVUELVO UN ARRAY [RESPONSE,ERROR]
async function createTask(todo) {
    try{
        const response = await fetch(`https://playground.4geeks.com/todo/todos/${userName}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                { label: todo, is_done: false }
            )
        })

        
        const data = await response.json()
        
        if(!response.ok){
            console.log({response,data})
            throw new Error (`Error ${response.status}: ${data.detail}`)
        }
        
        return [data,null]
    }catch(error){
        return [null,error]
    }
}

async function editTask(id, editTodo) {
    const response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            { label: editTodo, is_done: false }
        )
    })
    const data = await response.json()

    return data
}

async function deteleTodo(id){
    	const response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
			method: 'DELETE',
		})

        return response.ok 
}


const todoListServices = {
    getAllTodoList,
    createUser,
    createTask,
    editTask,
    deteleTodo
}

export default todoListServices