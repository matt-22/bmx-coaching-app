import { Component, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { initialData, User, userSchema } from './user';
import { email, form, FormField, minLength, required, schema, validate, FormRoot } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  imports: [MatFormFieldModule, MatInputModule, FormField, JsonPipe, MatButtonModule, FormRoot, MatCardModule],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})

export class Register {
  userModel = signal<User>(initialData);
  
  userForm = form(this.userModel, userSchema);
  
  protected onSubmit(event: Event) {
    event.preventDefault();  // prevent browser from doing a full page refresh

    
  }
}
