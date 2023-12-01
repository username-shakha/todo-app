import { FC } from 'react'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import SingleTodo from './SingleTodo.tsx'
import Todo from '../models/Todo.ts'
import styles from './css-modules-styles/DisplayTodos.module.css'

interface DisplayTodosProps {
    todosList: Todo[]
    updateTodo: (newTodo: Todo) => void
    deleteTodo: (id: string) => void
    resetTodo: () => void
    deleteCompleted: () => void
}

const DisplayTodos: FC<DisplayTodosProps> = ({
    todosList,
    updateTodo,
    deleteTodo,
    resetTodo,
    deleteCompleted,
}) => {
    return (
        <>
            <div className={styles.containerList}>
                {todosList.map((todo) => {
                    return (
                        <SingleTodo
                            key={todo.id}
                            todo={todo}
                            updateTodo={updateTodo}
                            deleteTodo={deleteTodo}
                        />
                    )
                })}
            </div>
            {!!todosList.length && (
                <div style={{ margin: '5px' }}>
                    <button
                        className={styles.button}
                        title="Reset Todos"
                        onClick={resetTodo}
                    >
                        <RiRefreshLine />
                    </button>
                    <button
                        className={styles.button}
                        title="Clear Completed Todos"
                        onClick={deleteCompleted}
                    >
                        <RiDeleteBin2Line />
                    </button>
                </div>
            )}
        </>
    )
}

export default DisplayTodos
// {!todosList.length && <h2>Todo list is empty</h2>}
