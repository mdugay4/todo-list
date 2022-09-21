import './App.css';
import { TodoList } from './TodoList';

function App() {
    return (
        <>
            <TodoList />
            <input type='text' name='' id='' />
            <button>Add Todo</button>
            <button>Remove Todo</button>
            <div>0 Left Todo</div>
        </>
    );
}

export default App;
