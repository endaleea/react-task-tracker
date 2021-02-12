import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks]  = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
        "id": 3,
        "text": "Food Shopping",
        "day": "Feb 5th at 2:30pm",
        "reminder": false
      }
  ]);
  
  const DeleteTask=(id) =>{
    setTasks(tasks.filter((task)=>task.id!==id));
  }

  const togleReminder=(id) => {
    setTasks(tasks.map((task)=>task.id===id ? {...task, reminder:!task.reminder} : task))
  }

   return (
     <div className="container">
       <Header />
       <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={togleReminder}/>
     </div>
   );
 }

export default App;
