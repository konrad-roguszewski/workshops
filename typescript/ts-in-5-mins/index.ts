// Types by Inference
let helloWorld = 'Hello World';

// Defining Types
interface User {
  name: string;
  id: number;
};

const user: User = {
  name: 'Hayes',
  id: 0,
};

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
};

const newUser: User = new UserAccount('Murphy', 1);

function getAdminUser(): User {
  return // ...
}

function deleteUser(user: User) {
  return // ...
}
