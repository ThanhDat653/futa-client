export interface IBill {
   roundTrip?: {
      tripId: string
      seats: string[]
   }
   passengerName: string
   passengerPhone: string
   passengerEmail: string
   trip: {
      tripId: string
      seats: string[]
   }
}

export interface IBillResponse {
    id: string;
    createDate: string;
    paymentAt: string;
    expireAt: string;
    totalPrice: number;
    paymentUrl: string;
    failureReason: string | null;
    failureAt: string | null;
    failure: boolean;
    passengerName: string;
    passengerPhone: string;
    passengerEmail: string;
    tickets: ITicketDto[];
    status: IBillStatusDto;
    type: string;
    trip: ITripDto;
    roundTrip: IBillResponse | null;
}

interface ITicketDto {
    id: string;
    seatName: string;
    price: number;
}

interface IBillStatusDto {
    name: "Success" | "Pending" | "Cancel";
}

interface ITripDto {
    id: string;
    startTime: string;
    endTime: string;
    startAt: string;
    endAt: string;
    regionFromName: string;
    regionToName: string;
    locationFromName: string;
    locationToName: string;
}
