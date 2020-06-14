import React, { useState } from 'react'
import Tasks from './Tasks'
import FlipMove from 'react-flip-move'

const TodoListApp = () => {

    const [currentItem, setCurrentItem] = useState({ text: '', key: '' })
    const [items, setItems] = useState([])

    const addTask = (evt) => {
        evt.preventDefault()
        setItems([...items, currentItem])
        setCurrentItem({ text: '', key: '' });
    }
    const deleteItem = (key) => {
        console.log("KEY:", key)
        const items_filtered = items.filter(item => item.key !== key)
        setItems(items_filtered);

    }
    const handleChange = (evt) => {
        setCurrentItem({ text: evt.target.value, key: Date.now() })
    }

    const editItem = (_text, key) => {
        console.log('.')

        const newItems = items.map(item => {
            if (item.key === key)
                item.text = _text
        })
        setCurrentItem({ text: "", key: "" })
        setItems(items)
        console.log("after edit:", items)
    }


    return (

        <section> {console.log('render')}
            <h1>TodoListApp</h1>
            
                <form onSubmit={addTask}>
                    <input
                        type="text" placeholder="enter a task"
                        name="task" value={currentItem.text}
                        onChange={handleChange} />
                    <button className="with-border-green">Add task</button>
                </form>
            
            <Tasks items={items} deleteItem={deleteItem} editItem={editItem} />

        </section>
    )
}

export default TodoListApp
