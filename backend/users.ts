export class User {
    constructor(
        public email: string,
        public name: string,
        private password: string
    ) {}

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email
        && another.password === this.password;
    }
}

export const users: {[key: string]: User} = {
    'milk@gmail.com': new User('milk@gmail.com', 'Milk', 'milk123'),
    'rick@gmail.com': new User('rick@gmail.com', 'Rick', 'rick123')
}
