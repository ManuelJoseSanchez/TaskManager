import { Component } from '@angular/core';
import { TaskFrom } from '../../component/task-from/task-from';

@Component({
  imports: [TaskFrom],
  selector: 'app-new-task',
  styleUrl: './new-task.css',
  templateUrl: './new-task.html',
})
export class NewTask {}
