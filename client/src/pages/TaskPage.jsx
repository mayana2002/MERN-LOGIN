import { useEffect } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskPage = () => {

  const { getTasks, tasks } = useTasks()
  console.log(tasks);

  useEffect(() => {
    getTasks();
  },[])

  return (
    <div>
      {
        tasks.map(task => (
          <div key={task._id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <br />
          </div>
        ))
      }
    </div>
  )
}

export default TaskPage
