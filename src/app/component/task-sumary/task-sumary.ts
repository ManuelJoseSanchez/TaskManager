import { Component,inject} from '@angular/core';
import { TaskService } from '../../services/task-service';

@Component({
  imports: [],
  selector: 'app-task-sumary',
  styleUrl: './task-sumary.css',
  templateUrl: './task-sumary.html',
})
export class TaskSumary {
  private readonly taskService = inject(TaskService);

  protected readonly totalTask = this.taskService.taskCount;
  protected readonly activeTask = this.taskService.activeCount
  protected readonly completedTasks = this.taskService.completedCount;
}
