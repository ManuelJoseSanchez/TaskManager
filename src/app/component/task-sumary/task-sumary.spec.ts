import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskSumary } from './task-sumary';

describe('TaskSumary', () => {
  let component: TaskSumary;
  let fixture: ComponentFixture<TaskSumary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskSumary],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskSumary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
