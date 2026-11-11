import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class LoginService {
    private http = inject(HttpClient)
    private apiUrl = "http://localhost:8080/api/v1/auth/login"

    // get request, get username and password
}
