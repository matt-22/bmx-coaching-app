import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAnchor } from '@angular/material/button';
import { initialData, LoginUser, loginUserSchema } from '../models/login-user';
import { MatInputModule } from '@angular/material/input';
import { FormField, form, FormRoot, submit } from '@angular/forms/signals';


@Component({
  imports: [MatCardModule, MatFormFieldModule, MatAnchor, MatInputModule, FormField, FormRoot],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  loginUserModel = signal<LoginUser>(initialData)
  loginForm = form(this.loginUserModel, loginUserSchema)

  protected onSubmit(event: Event) {
    event.preventDefault() // prevent browser from doing a full page refresh

    submit(this.loginForm, async f => {
      console.log('form submitted')

      try {
        
      } catch (err: unknown) {
        
      }

    })
  }

}
