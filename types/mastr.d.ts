type MastrItem = {
  id: string;
  name: string;
  state: string;
  zip: number;
  city: string;
  street: string;
  link: string;
};

type MastrList = MastrItem[];

export { MastrItem, MastrList };
