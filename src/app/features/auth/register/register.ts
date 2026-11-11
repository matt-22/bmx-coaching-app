import { Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { initialData, User, userSchema } from '../models/register-user';
import { email, form, FormField, minLength, required, schema, validate, FormRoot, submit } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Registration } from './registration';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Component({
  imports: [MatFormFieldModule, MatInputModule, FormField, JsonPipe, MatButtonModule, FormRoot, MatCardModule],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})

export class Register {
  private registrationService = inject(Registration)
  private router = inject(Router)

  protected readonly apiError = signal<string | null>(null)
  protected readonly isSubmitting = signal(false)

  userModel = signal<User>(initialData);

  // userSchema is where the client-side form field validation is defined
  userForm = form(this.userModel, userSchema);


  protected onSubmit(event: Event) {
    event.preventDefault();  // prevent browser from doing a full page refresh

    this.apiError.set(null)

    submit(this.userForm, async f => {
      this.isSubmitting.set(true)
      try {
        await firstValueFrom(
          this.registrationService.createUser(this.userForm().value())
        )
      } catch (err: unknown) {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 409 && err.error.message.includes('email address already exists')) {
            console.log(err.error.message)
            this.apiError.set(err.error.message)
          }
        }

      }
    })

  }
}
