import { Club } from "../Club/club.model";
import { Zone } from "../Zone/zone.model";


export class Terrain {
      terraiid:string;
	  nom:String;
	  adresse:String;
	  attitude:Number ;
	  longitude:Number ;
	  Type:Number;
	  etat:Boolean=true;
	  descriptuon:String;
	  tarif:Number;
	  zone:Zone;
	  club:Club;
}
