import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    title: new FormControl('',{
      nonNullable:true,
      validators:[
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    description: new FormControl('',{
      nonNullable:true,
      validators:[
        Validators.required,
        Validators.minLength(10)
      ]
    }),
    status: new FormControl<'todo' | 'in-progress' | 'completed'>('todo',{
      nonNullable:true,
      validators:[Validators.required]
    }),
    dueDate: new FormControl('',{
      nonNullable:true,
      validators: [Validators.required]
    })
  });

  protected submitTask(): void{

    if(this.taskFrom.invalid){
      this.taskFrom.markAllAsTouched();
      return;
    }
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
