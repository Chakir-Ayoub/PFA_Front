import { Client } from "../Client/client.model";

export class Reservation {
    id:Number;
	idreservation:string;
	date:Date;
    etat:Boolean;
    clientid:Client;
}
