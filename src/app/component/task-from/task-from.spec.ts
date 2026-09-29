import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskFrom } from './task-from';

describe('TaskFrom', () => {
  let component: TaskFrom;
  let fixture: ComponentFixture<TaskFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFrom],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskFrom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
