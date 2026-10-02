import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { NewTask } from './pages/new-task/new-task';
import { TaskDetails } from './pages/task-details/task-details';
export const routes: Routes = [
    {
        path:'',
        component: Dashboard
    },
    {
        path:'new-task',
        component:NewTask
    },
    {
        path:'tasks/:id',
        component: TaskDetails
    }
];
