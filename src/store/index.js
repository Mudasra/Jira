import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import createProjectSlice from "./projectSlice";
import createTaskSlice from "./taskSlice";

const useStore = create(
    devtools(
        persist(
            (set, get) => ({
                ...createProjectSlice(set, get),
                ...createTaskSlice(set, get),
            }),
            {
                name: "jira-clone-storage",
                partialize: (state) => ({
                    projects:state.projects,
                    projectOrder: state.projectOrder,
                    tasks:state.tasks,
                }),
            }
        )
    )
);

export default useStore;