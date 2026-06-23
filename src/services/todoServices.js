import instance from "../instances/instance";

const todoServices = {
    // GET /notes
    getTodos: async () => {
        return await instance.get('/todos');
    },
    // GET /notes/:id
    getTodoById: async (id) => {
        return await instance.get(`/todos/${id}`);
    },
    // DELETE /notes/:id
    deleteTodoById: async (id) => {
        return await instance.delete(`/todos/${id}`);
    },
    // PUT /notes/:id
    updateTodoById: async (id, data) => {
        return await instance.put(`/todos/${id}`, data);
    },
    // POST /notes
    createTodo: async (data) => {
        return await instance.post(`/todos`, data);
    }
}

export default todoServices;