import { Time } from "@angular/common";
import { Terrain } from "../Terrain/terrain.model";
import { Reservation } from "../Reservation/reservation.model";

export class Occupation {
      idoccupation:string;
	  date:Date;
	  heure:Time;
	  terrain:Terrain;
	  reservation:Reservation;
}
