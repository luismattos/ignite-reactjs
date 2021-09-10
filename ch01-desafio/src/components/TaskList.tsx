import { useState } from 'react'

import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    /* Deve ser possível adicionar uma nova task no estado de tasks, com os campos id que deve ser gerado de forma aleatória, title que deve ser um texto e isComplete que deve iniciar como false. */
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    if (newTaskTitle !== '') {
      let newTask: Task = {
        id: Math.random(),
        isComplete: false,
        title: newTaskTitle
      };
      setTasks([...tasks, newTask]);
      let o = document.querySelector(`input[value="${newTaskTitle}"]`);
      if (o) {
        setNewTaskTitle('');
      }
    } else {
      let msg = 'Could not create a new task: Task Title cannot be empty!';
      console.log(msg);
    }
  }

  function handleToggleTaskCompletion(id: number) {
    /* Deve alterar o status de isComplete para uma task com um ID específico que é recebido por parâmetro. */
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
    let indexOfTask = tasks.findIndex(function (task) {
      return task.id === id;
    });
    if (indexOfTask !== -1) {
      tasks[indexOfTask].isComplete = !tasks[indexOfTask].isComplete;
      setTasks([...tasks]);
    } else {
      let msg = `Could not toggle completion of the task: Task with id ${id} not found!`;
      console.log(msg);
    }
  }

  function handleRemoveTask(id: number) {
    /* Deve receber um ID por parâmetro e remover a task que contém esse ID do estado. */
    // Remova uma task da listagem pelo ID
    let filteredTasks = tasks.filter(function (task) {
      return task.id !== id;
    });
    if (filteredTasks.length !== tasks.length) {
      setTasks(filteredTasks);
    } else {
      let msg = `Could not remove task: Task with id ${id} not found!`;
      console.log(msg);
    }
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Adicionar novo todo"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16} />
              </button>
            </li>
          ))}

        </ul>
      </main>
    </section>
  )
}