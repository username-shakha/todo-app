import { FC, ChangeEvent, FormEvent, useState } from 'react'
import Todo from '../models/Todo.ts'
import styles from './css-modules-styles/EditTodoForm.module.css'

interface EditTodoFormProps {
    data: Todo
    updateTodo: (newTodo: Todo) => void
    handleToggleEdit: () => void
}

const EditTodoForm: FC<EditTodoFormProps> = ({
    data,
    updateTodo,
    handleToggleEdit,
}) => {
    const [editTodo, setEditTodo] = useState<Todo>(data)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setEditTodo({
            ...editTodo,
            [name]: value,
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { text } = editTodo

        if (data.text !== text) {
            updateTodo(editTodo)
            handleToggleEdit()
        } else {
            alert('there are no changes')
        }
    }

    return (
        <div className={styles.containerEditTodoForm}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="text"
                    value={editTodo.text}
                    placeholder="Enter new todo"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditTodoForm
