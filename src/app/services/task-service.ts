import { Service, computed, signal, inject } from '@angular/core';
import { Task } from '../modeels/task';
import { HttpClient } from '@angular/common/http';

@Service()
export class TaskService {
    protected readonly tasksState = signal<Task[]>([]);

  protected readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/tasks';

  public readonly tasks   = this.tasksState.asReadonly();
  public readonly taskCount = computed(()=> this.tasksState().length);

  public readonly completedCount = computed(()=> this.tasksState().filter((task)=> task.status === 'completed').length);

  public readonly activeCount = computed(()=> this.tasksState().filter(task => task.status !== 'completed').length);

  public constructor(){
    this.loadTasks();
  }

  public toggleTaskCompletion(taskId: number): void {
    const task = this.getTaskById(taskId);
    if(!task) return;

    const newStatus: 'todo' | 'in-progress' | 'completed' = task.status === 'completed' ? 'todo' : 'completed';

    this.http.patch<Task>(`${this.apiUrl}/${taskId}`, { status: newStatus }).subscribe((updatedTask) => {
      this.tasksState.update((tasks) =>
        tasks.map((t) => (t.id === taskId ? updatedTask : t))
      );
    });
  }

  public addTask(task: Omit<Task,'id'>): void{
    this.http.post<Task>(this.apiUrl, task).subscribe((newTask)=>{
      this.tasksState.update((tasks)=> [...tasks, newTask]);
    });
  }

  public getTaskById(taskId:number): Task | undefined{
    return this.tasksState().find((task)=> task.id === taskId);
  }

  public readonly canCreateTask = computed(()=> this.tasksState().length < 5);

  public loadTasks(): void {
    this.http.get<Task[]>(this.apiUrl).subscribe((tasks)=>{
      this.tasksState.set(tasks);
    });
  }
}
