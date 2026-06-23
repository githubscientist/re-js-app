import instance from "../instances/instance";

const todoServices = {
    getTodos: async () => {
        return await instance.get('/todos');
    }
}

export default todoServices;