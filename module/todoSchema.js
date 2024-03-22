import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    toDo: {
        type:String,
        require:true,
    },
});

const TodoModel = mongoose.models.todos || mongoose.model('todos',todoSchema)

export default TodoModel;
