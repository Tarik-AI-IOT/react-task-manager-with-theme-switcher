

export default function TaskList({TaskList}) {


    return (
        <div>
            {TaskList.map((task, index) => <p key={index}>{task.inputTask}</p>)}
        </div>
    );
};