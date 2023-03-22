import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

import { addTask } from './../../actions';

let timer;

export function TaskInput() {
    const [taskName, setTaskName] = useState('');
    const [timeElapsed, setTimeElapsed] = useState('');
    const [timerEnabled, setTimerEnabled] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        clearTimeout(timer);
        tryScheduleNext();

        if (!timerEnabled) {
            saveTask();
        }
    }, [timerEnabled])

    useEffect(() => {
        tryScheduleNext();
    }, [timeElapsed])

    function decreaseTimeElapsed() {
        setTimeElapsed(timeElapsed - 1)
    }

    function tryScheduleNext() {
        if (timerEnabled && timeElapsed > 0) {
            timer = setTimeout(decreaseTimeElapsed, 1000);
        }
    }

    function saveTask() {
        if (taskName && timeElapsed !== undefined) {
            dispatch(addTask({ taskName, timeElapsed }))
        }
    }

    return <div>
        <input placeholder="Task name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <input placeholder="Task elapsed" value={timeElapsed} onChange={(e) => setTimeElapsed(e.target.value)} />
        <button onClick={() => setTimerEnabled(true)}> Start </button>
        <button onClick={() => setTimerEnabled(false)}> End </button>
    </div>
}