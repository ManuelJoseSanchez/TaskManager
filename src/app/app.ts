import { Component, signal } from '@angular/core';
import { TaskList } from './component/task-list/task-list';
import { TaskSumary } from './component/task-sumary/task-sumary';

@Component({
  imports: [TaskList, TaskSumary],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TaskManager');
}
