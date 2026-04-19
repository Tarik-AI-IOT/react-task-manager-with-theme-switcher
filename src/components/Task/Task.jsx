
export default function Task({ handleSubmit, inputTask, setInputTask }) {


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="inputTask" placeholder="Add a task." value={inputTask} onChange={(e) => setInputTask(prev => ({...prev, [e.target.name]: e.target.value}))} />
            <button>I Got This!</button>
        </form>
    );
};