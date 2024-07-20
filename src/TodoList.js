import React from "react";
const TodoList = ({todos})=>{
    return (
        <div>
           {todos.map((todo,index)=>
           <div>
            <h1>{todo} <button>Delete</button></h1>
            </div>)}
        </div>
    )
}
export default TodoList;