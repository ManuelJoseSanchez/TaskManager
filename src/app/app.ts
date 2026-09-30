import { Component, signal } from '@angular/core';
import { TaskList } from './component/task-list/task-list';
import { TaskSumary } from './component/task-sumary/task-sumary';
import { TaskFrom } from './component/task-from/task-from';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TaskManager');
}
