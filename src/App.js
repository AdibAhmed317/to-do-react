import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {

    const [inputText,setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('');
    const [todoFilter, setTodoFilter] = useState([]);


    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos,status]);

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setTodoFilter(todos.filter((todo)=> todo.completed === true));
                break;
            case 'running':
                setTodoFilter(todos.filter((todo)=> todo.completed === false));
                break;
            default:
                setTodoFilter(todos);
                break;
        }  
    };

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null){
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let localTodo = JSON.parse(localStorage.getItem("todos"));
            setTodos(localTodo);
        }
    }; 
    
    
    return(
        <div className="App">
            <header>
                <h1>My to do list</h1>
            </header>
            <Form 
                inputText={inputText} 
                todos={todos} 
                setTodos={setTodos} 
                setInputText={setInputText} 
                setStatus={setStatus}
            />
            <TodoList 
                todos={todos} 
                setTodos={setTodos}
                todoFilter={todoFilter}
            />
        </div>
    );
}
export default App;