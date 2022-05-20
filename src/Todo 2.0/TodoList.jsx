// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

export const TodoList=({todos,setTodos})=>{

    const deleteTodo=({id})=>{
        setTodos(todos.filter((e)=>e.id !==id))
    } 

    const completeTodo=(e)=>{
          setTodos(
              todos.map((item)=>{
                  if(item.id===e.id){
                      return{...item,completed: !item.completed}
                  }
                  return item
              })
          )
    }

    return(
      <div>
          {todos.map((e)=>(
              <li className="list-item" key={e.id}>
                  <input
                  type="text"
                  value={e.title}
                  className={`list ${e.completed ? "complete":""}`}
                  onChange={(e)=>e.preventDefault()}
                  />
                  <div>
                      <button className="button-complete task-button"
                          onClick={()=>completeTodo(e)}   >
                      <i className="fa fa-check-circle"></i>
                      </button>
 
                      <button className="button-delete task-button"
                       onClick={()=>deleteTodo(e)}>
                      <i className="fa fa-trash"></i>
                      </button>
                      </div>
              </li>
          ))}
      </div>
    )
}