import React from 'react'
import FlipMove from 'react-flip-move'

const Tasks = ({items, deleteItem, editItem}) => {

    const listItems =  items.map(task=>(  
        
        <div key={task.key} className="container-task">
            {console.log("task",task)}
            <span>Tarea :</span>
            <input 
                className="noborder"  type="text"  id={task.key}
                value={task.text}
                onChange={(e)=>{ editItem(e.target.value,task.key); console.log("onCh:",e.target)} } 
                />
            <button  onClick={()=>deleteItem(task.key)} className="with-border-red">
                <div className="trash-icon"/>    
            </button>
        </div>
    ))

    return(
                
        <div className="container-tasks">
            <FlipMove duration={400} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}

export default Tasks


