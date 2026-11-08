import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './layout/header/nav/nav';
import { Register } from './features/auth/register/register';

@Component({
  imports: [RouterOutlet, Nav],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('bmx-coaching-app');
}
