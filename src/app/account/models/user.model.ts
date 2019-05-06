import { UserLogin } from './user-login.model';

export class User extends UserLogin {
    constructor(public email: string = '',
        public password: string = '',
        public token: string = '',
        public avatar: string = '') 
    {
        super(email, password);
        this.token = token;
    }
}
