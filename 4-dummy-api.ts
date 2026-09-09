interface Hair {
  color: string;
  type: string;
}

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

enum Role {
  admin = "admin",
  moderator = "moderator",
  user = "user",
}

enum Gender {
  male = "male",
  female = "female",
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: Role;
}

interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

async function getUsers() {
  try {
    const response = await fetch("https://dummyjson.com/users");

    if (response.ok) {
      const data: UsersResponse = await response.json();
      return data;
    } else {
      throw new Error("invalid data");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("unknown error");
    }
  }
}

getUsers().then(data => console.log(data))
