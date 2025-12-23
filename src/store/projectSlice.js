export default function createProjectSlice (set){
    return {
        projects: {}, // normalized : {[id]: {id, name, columns: []}}
    projectOrder: [], // ordered list of project IDs

    addProject: (project) => set((state) => {
        const id = project.id;
        return {
            projects: {...state.projects, [id]: project},
            projectOrder: [...state.projectOrder, id],
        };
    }),

    updateProject: (id, updates) => 
        set((state) => ({
            projects: {...state.projects, [id]: {...state.projects[id], ...updates}},           
        })),

        deleteProject: (id) => 
            set((state) => {
                const newProjects = {...state.projects};
                delete newProjects[id];
                return {
                    projects: newProjects,
                    projectOrder: state.projectOrder.filter((pid) => pid !== id),
                };
            }),
    };
}