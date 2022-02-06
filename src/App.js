import { useState } from "react"

function App() {
	const [todos, setTodos] = useState([])
	const [task, setTask] = useState("")

	const createTodo = (event) => {
		event.preventDefault()
		setTodos((prevState) => {
			setTask("") //blank out input, safer to do it here
			return [...prevState, task]
		})
	}

	return (
		<div className='App'>
			<h1 className='start'>Hey There</h1>
			<form onSubmit={createTodo}>
				<input
					type='text'
					value={task}
					onChange={(e) => {
						setTask(e.target.value)
					}}
				/>
				<button type='submit'>Create todo</button>
			</form>
			<ul>
				{todos.map((todo) => {
					return <li>{todo}</li>
				})}
			</ul>
		</div>
	)
}

export default App
