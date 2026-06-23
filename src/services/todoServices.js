import instance from "../instances/instance";

const todoServices = {
    getTodos: async () => {
        return await instance.get('/todos');
    },
    getTodoById: async (id) => {
        return await instance.get(`/todos/${id}`);
    },
    deleteTodoById: async (id) => {
        return await instance.delete(`/todos/${id}`);
    },
    updateTodoById: async (id, data) => {
        return await instance.put(`/todos/${id}`, data);
    },
    createTodo: async (data) => {
        return await instance.post(`/todos`, data);
    }
}

export default todoServices;