export const addTask = task => {
    return {
        type: 'tasks/add',
        task: task
    }
}