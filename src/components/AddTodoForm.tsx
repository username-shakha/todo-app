import { FC, ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Todo from '../models/Todo.ts'
import styles from './css-modules-styles/AddTodoForm.module.css'

interface AddTodoFormProps {
    addTodo: (newTodo: Todo) => void
}

const initState = {
    text: '',
}

const AddTodoForm: FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<{ text: string }>(initState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setNewTodo({
            ...newTodo,
            [name]: value,
        })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { text } = newTodo

        if (text) {
            addTodo({
                text,
                id: uuidv4(), //uuidv4() => type string  //Date.now() => type number //Todo = {id: string, text: string, isComplited: boolean}
                isComplited: false,
            })
        }
        setNewTodo(initState)
    }

    return (
        <div className={styles.containerAddForm}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="text"
                    value={newTodo.text}
                    placeholder="Enter new todo"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddTodoForm
