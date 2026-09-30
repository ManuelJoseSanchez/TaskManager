import { Component } from '@angular/core';
import { TaskList } from '../../component/task-list/task-list';
import { TaskSumary } from '../../component/task-sumary/task-sumary';

@Component({
  imports: [TaskList,TaskSumary],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {}
