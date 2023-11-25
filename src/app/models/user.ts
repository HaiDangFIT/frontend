export interface User {
    _id: string;
    fullName: string;
    email: string;
    password: string;
    mobile: string;
    role: number;
    address: string;
    isBlocked: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
  
export interface Specialty {
    _id: string;
    name: string;
    clinicID: string;
}
  
export interface Doctor {
    _id: User;
    specialtyID: Specialty;
    description: string;
    roomID: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
  