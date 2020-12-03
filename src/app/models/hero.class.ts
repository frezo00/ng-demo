import { IHero } from './hero.interface';

export class Hero implements IHero {
  isHero?: boolean;
  // fullName: string; // Umjesto property-a može getter

  constructor(
    public id: number,
    public firstName: string,
    public lastName: string
  ) {
    // this.fullName = `${this.firstName} ${this.lastName}`;
  }

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Predug i nepotreban način
// export class Hero {
//   id: number;
//   firstName: string;
//   lastName: string;

//   constructor(id: number, firstName: string, lastName: string) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
