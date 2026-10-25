import { schema, email, required, minLength, validate } from "@angular/forms/signals";

export interface User {
    email: string;
    password: string;
    confirmPassword: string;
}

export const initialData: User = {
    email: '',
    password: '',
    confirmPassword: '',
}

export const userSchema = schema<User>((rootPath) => {
    // email is required and must be a valid format
    required(rootPath.email, { message: 'Your email is required' });
    email(rootPath.email, { message: 'Please enter a valid email address'});

    // password is required and must be at least 8 characters
    required(rootPath.password, { message: 'Password is required'});
    minLength(rootPath.password, 8, { message: 'Password must be at least 8 characters'})

    // confirm password is required and must be at least 8 characters
    required(rootPath.confirmPassword, { message: 'Confirm password is required'});
    minLength(rootPath.confirmPassword, 8, { message: 'Password must be at least 8 characters'})

    // password and confirm password must match
    validate(rootPath.confirmPassword, ({value, valueOf}) => {
        if (value() !== valueOf(rootPath.password)) {
            return {kind: 'passwordMismatch', message: 'Passwords do not match'}
        }
        return null;
    });

});
