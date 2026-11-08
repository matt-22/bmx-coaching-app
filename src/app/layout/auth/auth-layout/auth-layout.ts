import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register } from '../../../features/auth/register/register';

@Component({
  imports: [RouterOutlet, Register],
  selector: 'app-auth-layout',
  styleUrl: './auth-layout.scss',
  templateUrl: './auth-layout.html',
})
export class AuthLayout {}
