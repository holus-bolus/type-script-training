interface User {
  name: string;
  lastNAme: {
    Doe: {
      Smith: {}
    }
  };

  height?: number;
}

interface Customer {
  user: User;
  bill: number;
}


interface UserInfo {
  phone: string;
  email: string;
}

interface User extends UserInfo {
  name: string;
  readonly surname: string;
  height?: number;
}