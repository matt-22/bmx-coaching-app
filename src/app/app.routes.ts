import { Routes } from '@angular/router';
import { Register } from './features/auth/register/register';
import { AuthLayout } from './layout/auth/auth-layout/auth-layout';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayout,
        children: [
            //{path: '', redirectTo: '/register', pathMatch: 'full'},
            {path: 'register', component: Register}
        ]
    },
    {
        path: 'register',
        title: 'Register for a new Account',
        component: Register
    },
    {
        path: 'login',
        title: 'Log into your account',
        component: Login
    }
];
