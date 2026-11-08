import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { User } from './user';


@Service()
export class Registration {
    private http = inject(HttpClient)
    private apiUrl = "http://localhost:8080/api/v1/users"

    // POST request, create a new user
    createUser(userFormData: User) {
        return this.http.post(this.apiUrl, userFormData)
    }
}

