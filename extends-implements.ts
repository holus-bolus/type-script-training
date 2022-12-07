interface Citizen {
  name: string;
  surname: string;
}

interface CitizenAdditionalInfo {
  birthday: string;
  age: number;
}

interface Human extends Citizen, CitizenAdditionalInfo {
  height: number;
}

const Man: Human = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  birthday: '1.01.1920',
  height: 192
};