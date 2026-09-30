import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { NewTask } from './pages/new-task/new-task';
export const routes: Routes = [
    {
        path:'',
        component: Dashboard
    },
    {
        path:'new-task',
        component:NewTask
    }
];
