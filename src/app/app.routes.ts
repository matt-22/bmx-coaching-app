import { Routes } from '@angular/router';
import { Register } from './features/components/register/register';
import { AuthLayout } from './layout/auth/auth-layout/auth-layout';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayout,
        children: [
            {path: '', redirectTo: '/register', pathMatch: 'full'},
            {path: 'register', component: Register}
        ]
    },
    {
        path: 'register',
        title: 'Register for a new Account',
        component: Register
    }
];
