import { useSelector } from "react-redux"

export function TaskList() {
    const tasks = useSelector(state => state.tasks);
    return <ul>
        {tasks.map((task, index) => <li key={`task-${index}`}>
            <label> {task.taskName} </label>
            <label> {task.timeElapsed} </label>
        </li>)}
    </ul>
}