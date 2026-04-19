
export default function Task({ handleSubmit, inputTask, setInputTask }) {

const style = {
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        margin: '20px auto',
        padding: '0.8rem',
        fontSize: '1.7rem',
        width: '100%',
        maxWidth: '600px',

    },
    input: {
        padding: '10px',
        width: '500px',
        borderRadius: '25px 0 0 25px',
        fontSize: '1.1rem',
        border: 'none',
        outline: 'none'
    },
    button: {
        padding: '10px',
        borderRadius: '0 25px 25px 0',
        fontSize: '1.0rem',
        border: 'none',
        width: '100px',
        cursor: 'pointer',
}}


    return (
        <form onSubmit={handleSubmit} style={style.form}>
            <input style={style.input} type="text" name="title" placeholder="Add a task." value={inputTask.title} onChange={(e) => setInputTask(prev => ({...prev, [e.target.name]: e.target.value}))} />
            <button type="submit" style={style.button}>I Got This!</button>
        </form>
    );
};