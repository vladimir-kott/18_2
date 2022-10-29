import httpService from "./http.service";
const todosEndepoint = "todos/";
const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todosEndepoint, {
            params: {
                _page: 1,
                _limit: 10,
            },
        });
        return data;
    },
    load: async (newTask) => {
        const {data} = await httpService.post(todosEndepoint, {
            userId: newTask.id,
            id:1,
            title: newTask.title,
            body: "some info in body task",
            completed: newTask.completed
        })
        return data 
    }
};
export default todosService;
