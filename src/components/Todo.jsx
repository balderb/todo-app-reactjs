function Todo() {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked={true} />
                <label className="todo-label" htmlFor="todo-0">
                    Eat
                </label>
            </div>
            <div className="btn-group">
            <button type="button" className="btn">
                 <span className="visually-hidden">Edit</span>
            </button>
            <button type="button" className="btn btn__danger">
                 <span className="visually-hidden">Delete</span>
            </button>
            </div>
        </li>
    );
}

export default Todo
