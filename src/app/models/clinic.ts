interface Address {
  province: string;
  district: string;
  ward: string;
}

export interface Clinic {
  address: Address;
  specialtyID: string[];
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
