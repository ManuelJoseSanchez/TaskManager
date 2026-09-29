import { Service, computed, signal } from '@angular/core';
import { Task } from '../modeels/task';

@Service()
export class TaskService {
    protected readonly tasksState = signal<Task[]>([
        {
          id:1,
          title:'Design Dasbord',
          description:'Create the initial deshbord  layoud',
          status:'in-progress',
          dueDate:'2026-08-15'
        },
        {
          id:2,
          title:'Review documentation',
          description:'Review the project documentation',
          status:'todo',
          dueDate:'2026-08-18'
        },
        {
          id:3,
          title:'Prepare relase',
          description:'Prepare the aplication for release',
          status:'completed',
          dueDate:'2026-08-20'
        }
      ]);

 public readonly tasks   = this.tasksState.asReadonly();
 public readonly taskCount = computed(()=> this.tasksState().length);

 public readonly completedCount = computed(()=> this.tasksState().filter((task)=> task.status === 'completed').length);

 public readonly activeCount = computed(()=> this.tasksState().filter(task => task.status !== 'completed').length);

 public toggleTaskCompletion(taskId: number): void {
  this.tasksState.update((tasks)=>
    tasks.map((task)=>
    task.id === taskId
  ?{
    ...task,
    status: task.status === 'completed' ? 'todo':'completed'
  }
  : task
  ))
 }

public addTask(task:Omit<Task,'id'>): void{
  this.tasksState.update((tasks)=>[
    ...tasks,
    {
      ...task,
      id: Date.now()
    }
  ]);
}
}
