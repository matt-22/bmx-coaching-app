import { Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { initialData, User, userSchema } from './user';
import { email, form, FormField, minLength, required, schema, validate, FormRoot, submit } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Registration } from './registration';


@Component({
  imports: [MatFormFieldModule, MatInputModule, FormField, JsonPipe, MatButtonModule, FormRoot, MatCardModule],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})

export class Register {
  private registrationService = inject(Registration)

  userModel = signal<User>(initialData);

  userForm = form(this.userModel, userSchema); 
  // userSchema is where the client-side form field validation is defined

  protected onSubmit(event: Event) {
    event.preventDefault();  // prevent browser from doing a full page refresh
    submit(this.userForm, async f => {
      this.registrationService.createUser(this.userForm().value()).subscribe(item=> console.log('user created'));
      console.log(this.userForm().value())
    })


  }
}
