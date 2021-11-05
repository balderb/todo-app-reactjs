import { IoClose } from 'react-icons/io5';

const List = ({ items, setItems, deleteItem, completed, id }) => {
    return (
        <ul>
            <article>
                <ul className = "bg-gray-100 p-5 rounded-lg mt-10 max-w-md mx-auto sm:max-w-2xl">
                    {items.map(({id, title}) => (
                        <ul className="flex justify-between border-b-2">
                            <input id={id} type="checkbox" defaultChecked={completed}/>
                            <label key={id} htmlFor={id} className="text-black py-2 tracking-wider">{title}</label>
                            <button className="text-3xl" onClick={() => deleteItem(id)}><IoClose className="text-gray"/>
                            </button>
                        </ul>
                    ))}

                    <ul className="flex items-center justify-between">
                       <li>
                            <p className="text-sm pt-3 ">{items.length} items left</p>
                       </li>
                       <ul className="flex items-center justify-between">
                            <li>
                                <button className="text-sm pt-3 px-3">All</button>
                            </li>
                            <li>
                                <button className="text-sm pt-3 px-3">Active</button>
                            </li> 
                            <li>
                                <button className="text-sm pt-3 px-3">Completed</button>
                            </li>  
                       </ul>
                       <li>
                            <button className="text-sm pt-3">Clear Completed</button>
                       </li> 
                    </ul>       
                </ul>
            </article>
        </ul>
    )
}

export default List

