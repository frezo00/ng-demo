// Možda bi bilo bolje interface prebacit u file gdje je i klasa jer su usko vezani
export interface IHero {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  isHero?: boolean;
}
