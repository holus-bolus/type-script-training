interface IClassUser {
  name: string;
  lastName: string;
}

class User implements IClassUser {
  name: string;
  lastName: string;
  protected secretMessage: string;

  constructor(props: IClassUser) {
    this.name = props.name;
    this.lastName = props.lastName;
    this.secretMessage = `${props.name} secret message`;
  }

  printFullName(): string {
    return (`${this.name} ${this.lastName}`);
  }

  printSecretMessage(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const FirstUser = new User({
  name: 'Oleksii',
  lastName: 'Ustinov'
});

interface IClassCustomer extends IClassUser {
  bill: number;
}

class ClassCustomer extends User {
  bill: number;

  constructor(props: IClassCustomer) {
    super({
      name: props.name,
      lastName: props.lastName
    });
    this.bill = props.bill;
  }
}

const MySuperCustomer = new ClassCustomer({
  name: 'Oleksii',
  lastName: 'Ustinov',
  bill: 1000
});

