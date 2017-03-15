import {Injectable} from "@angular/core";

@Injectable()
export class EventIdService {
  id: number;
  constructor() {
    this.id = 0;
  }

  getId(){
    return this.id;
  }

  getNewId(){
    this.id++;
    return this.id
  }

}
