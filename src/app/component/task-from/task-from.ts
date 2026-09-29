import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task-service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-task-from',
  styleUrl: './task-from.css',
  templateUrl: './task-from.html',
})
export class TaskFrom {
  private readonly taskSevice =  inject(TaskService);

  protected readonly taskFrom = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl<'todo' | 'in-progress' | 'completed'>('todo'),
    dueDate: new FormControl('')
  });

  protected submitTask(): void{
    const { title, description, status, dueDate}= this.taskFrom.getRawValue();

    this.taskSevice.addTask({
      title:title ?? '',
      description:description ??  '',
      status:status ??  'todo',
      dueDate:dueDate ?? ''
    });

    this.taskFrom.reset({
      title:'',
      description:'',
      status:"todo",
      dueDate:''
    });
  }
}
