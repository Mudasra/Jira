export default function createTaskSlice (set) {
    return {
        tasks: {},
    addTask: (task) => 
        set((state) => ({tasks: {... state.tasks, [task.id]: task}})),

    updateTask: (id, updates) => 
        set((state) => ({
            tasks: {...state.tasks, [id]: {...state.tasks[id], ...updates}},  
        })),

        deleteTask: (id) => 
            set((state) => {
                const newTasks = {...state.tasks};
                delete newTasks[id];
                return {tasks: newTasks};
            }),
    }
};

