import { email, required, schema } from "@angular/forms/signals";
import { PasteEdits } from "typescript";

export interface LoginUser {
    email: string;
    password: string;
}

export const initialData: LoginUser = {
    email: '',
    password: ''
}

export const loginUserSchema = schema<LoginUser>((rootPath) => {
    // email is required and must be a valid format
    required(rootPath.email, { message: 'Please enter your email'})
    email(rootPath.email, { message: 'Please enter a valid email address'})

    // password is required. Don't apply any other validation
    required(rootPath.password, { message: 'Please enter your password'})
})
