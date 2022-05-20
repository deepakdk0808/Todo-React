import {nanoid} from "nanoid"

export const FormTodo=({input,setInput,todos,setTodos})=>{
    const change=(e)=>{
          setInput(e.target.value)
    }
    const submit=(e)=>{
          e.preventDefault()
          setTodos([...todos,{id:nanoid(),
            title:input,
            completed:false,
        }])
        setInput('')
    }
    return(
        <form onSubmit={submit}>
            <input 
            type="text" 
            placeholder="Enter A Todo" 
            className="task-input"
            value={input}
            required
            onChange={change}
            />
            <button className="button-add" type="submit">Add</button>
        </form>
    )
}