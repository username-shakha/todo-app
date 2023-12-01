import { FC, useState } from 'react'

import AddTodoForm from './components/AddTodoForm.tsx'
import DisplayTodos from './components/DisplayTodos.tsx'

import Todo from './models/Todo.ts'
import './App.css'

const App: FC = () => {
    const [todosList, setTodosList] = useState<Todo[]>([])

    console.log('rerender ', todosList)

    const addTodo = (newTodo: Todo) => {
        setTodosList([...todosList, newTodo])
    }

    const updateTodo = (newTodo: Todo) => {
        setTodosList(
            todosList.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
        )
    }

    const deleteTodo = (id: string) => {
        const newTodosList = todosList.filter((todo) => todo.id !== id)
        setTodosList(newTodosList)
    }

    const resetTodo = () => {
        setTodosList([])
    }

    const deleteCompleted = () => {
        setTodosList(todosList.filter((todo) => !todo.isComplited))
    }

    // const completedTodosCount = todosList.filter(
    //     (todo) => todo.isCompleted
    // ).length

    return (
        <div className="App">
            <h1>Todo App</h1>

            <AddTodoForm addTodo={addTodo} />

            <DisplayTodos
                todosList={todosList}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                resetTodo={resetTodo}
                deleteCompleted={deleteCompleted}
            />
        </div>
    )
}

export default App

// {completedTodosCount > 0 && (
//   <h2>{`You have completed ${completedTodosCount} ${
//     completedTodosCount > 1 ? 'todos' : 'todo'
//   }`}</h2>
// )}

// {!!todos.length && (
//   <TodosActions
//     completedTodosExist={!!completedTodosCount}
//     resetTodos={resetTodosHandler}
//     deleteCompletedTodos={deleteCompletedTodosHandler}
//   />
// )}

// const deleteTodoHandler = (id) => {
//   setTodos(todos.filter((todo) => todo.id !== id))
// }

// const toggleTodoHandler = (id) => {
//   setTodos(
//     todos.map((todo) =>
//       todo.id === id
//         ? { ...todo, isCompleted: !todo.isCompleted }
//         : { ...todo }
//     )
//   )
// }

// const resetTodosHandler = () => {
//   setTodos([])
// }

// const deleteCompletedTodosHandler = () => {
//   setTodos(todos.filter((todo) => !todo.isCompleted))
// }

// const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

// deleteTodo={deleteTodoHandler}
// toggleTodo={toggleTodoHandler}
