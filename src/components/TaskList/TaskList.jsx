import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { themes } from '../../themes/themes';

export default function TaskList({ tasks }) {
    const { theme } = useContext(ThemeContext);

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        width: '100%',
    },

    list: {
        width: '320px',
    },

    task: {
        width: '100%',
        padding: '15px 20px',
        marginBottom: '12px',
        borderRadius: '12px',
        fontSize: '1.1rem',
        cursor: 'pointer',
        color: themes[theme].color,
        '--task-bg':
            theme === 'light'
                ? 'rgba(255, 255, 255, 0.96)'
                : 'rgba(255, 255, 255, 0.08)',
        '--task-border':
            theme === 'light'
                ? '1px solid #e0e0e0'
                : '1px solid rgba(255, 255, 255, 0.15)',
        '--task-shadow':
            theme === 'light'
                ? '0 2px 6px rgba(0,0,0,0.08)'
                : '0 2px 6px rgba(255,255,255,0.06)',
        '--task-text': themes[theme].color,
        '--task-backdrop':
            theme === 'light'
                ? 'none'
                : 'blur(8px)',
    }
};

    return (
        <div style={style.container}>
            <div style={style.list}>
                {tasks.map((task, index) => (
                    <div key={index} className="task" style={style.task}>
                        {task.title}
                    </div>
                ))}
            </div>
        </div>
    );
}