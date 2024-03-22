
import TodoModel from "../module/todoSchema.js"

export const getTodos = async(req, res)=>{
 const todos = await TodoModel.find()
 res.send(todos)
}

export const saveTodo =  (req, res) => {
    const { toDo: string } = req.body;
  
    TodoModel.create({ toDo: string})
      .then((data) => {
        console.log("Saved Successfully...");
        res.status(201).send(data);
      })
      .catch((err)=>{
        console.log(err);
        res.status({error: err, msg: "Something went wrong"})
       })
      }

  export const updateTodo = (req, res) => {
    const { id } = req.params;
    const { toDo } = req.body;
  
    TodoModel.findByIdAndUpdate(id, { toDo })
      .then(() => {
        res.send("Updated Successfully....");
      })
      .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!" });
      });
  };
  
  export const deletTodo =  (req, res) => {
    const { id } = req.params;
  
    TodoModel.findByIdAndDelete(id)
      .then(() => {
        res.send("Deleted Successfully....");
      })
      .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!" });
      });
  };