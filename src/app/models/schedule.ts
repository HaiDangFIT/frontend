export interface Schedule {
    _id: string;
    doctorID: {
      _id: string;
      specialtyID: string;
      description: string;
      roomID: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    cost: number;
    date: string;
    timeType: {
      full: boolean;
      time: string;
      maxNumber: number;
    }[];
    __v: number;
}
  