
export default function Task({ handleSubmit, inputTask, setInputTask }) {

const style = {
    form: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',

        margin: '20px auto',
        padding: '0.8rem',
        fontSize: '1.7rem',
        width: '100%',
        maxWidth: '600px',

    },
    input: {
        flex: 1,
        minWidth: 0,
        padding: '12px 16px',
        borderRadius: '25px 0 0 25px',
        fontSize: '1.1rem',
        border: 'none',
        outline: 'none'
    },
    button: {
        padding: '12px 20px',
        borderRadius: '0 25px 25px 0',
        fontSize: '1.0rem',
        border: 'none',
        width: 'auto',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
}}


    return (
        <form onSubmit={handleSubmit} style={style.form}>
            <input style={style.input} type="text" name="title" placeholder="Add a task." value={inputTask.title} onChange={(e) => setInputTask(prev => ({...prev, [e.target.name]: e.target.value}))} />
            <button type="submit" style={style.button}>I Got This!</button>
        </form>
    );
};