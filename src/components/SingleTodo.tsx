import { FC, useState } from 'react'
import { RiTodoFill, RiDeleteBin2Line, RiEditLine } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'

import Todo from '../models/Todo.ts'
import EditTodoForm from './EditTodoForm.tsx'
import styles from './css-modules-styles/SingleTodo.module.css'

interface SingleTodoProps {
    todo: Todo
    updateTodo: (newTodo: Todo) => void
    deleteTodo: (id: string) => void
}

const SingleTodo: FC<SingleTodoProps> = ({ todo, updateTodo, deleteTodo }) => {
    const [edit, setEdit] = useState<boolean>(false)

    const [isComplited, setIscomplited] = useState<boolean>(false)

    const handleToggleEdit = () => {
        setEdit(!edit)
    }

    const handleToggleCheck = () => {
        setIscomplited(!isComplited)
        isComplited ? (todo.isComplited = false) : (todo.isComplited = true)
    }

    return (
        <div
            className={`${styles.todo} ${
                isComplited ? styles.completedTodo : ''
            }`}
        >
            <RiTodoFill className={styles.todoIcon} />
            {todo.isComplited ? (
                <div className={styles.todoText}>{todo.text}</div>
            ) : edit ? (
                <EditTodoForm
                    data={todo}
                    updateTodo={updateTodo}
                    handleToggleEdit={handleToggleEdit}
                />
            ) : (
                <div className={styles.todoText}>{todo.text}</div>
            )}
            <FaCheck
                className={styles.checkIcon}
                onClick={() => {
                    if (edit) {
                        return alert(
                            `you cannot complete the task while editing it`
                        )
                    } else {
                        return handleToggleCheck()
                    }
                }}
            />
            <RiEditLine
                className={styles.editIcon}
                onClick={() => {
                    if (isComplited) {
                        return alert(`this task is already completed!`)
                    } else {
                        return handleToggleEdit()
                    }
                }}
            />
            <RiDeleteBin2Line
                className={styles.deleteIcon}
                onClick={() => {
                    if (edit) {
                        return alert(
                            `you cannot delete a task while editing it`
                        )
                    } else {
                        return deleteTodo(todo.id)
                    }
                }}
            />
        </div>
    )
}

export default SingleTodo
//RiEditLine
//  <RiEditLine onClick={() => } />
// import { FaCheck } from 'react-icons/fa'
/* <FaCheck
className={styles.checkIcon}
onClick={() => toggleTodo(todo.id)}
/> */

// className={`${styles.todo} ${
//     todo.isCompleted ? styles.completedTodo : ''
//   }`}

// onClick={() => deleteTodo(todo.id)}
