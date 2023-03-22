const initialState = { tasks: [] }

export function tasksReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'tasks/add') {
        // If so, make a copy of `state`
        return {
            tasks: [...state.tasks, action.task]
        }
    }
    // otherwise return the existing state unchanged
    return state
}