import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class EventIdService {
  id_event: number;
  constructor(public storage: Storage) {
    this.id_event = 1;
  }

  getNewId():Promise<number>{
    return this.storage.get('id_event').then((store) => {
      this.id_event=store;
      this.id_event++;
      this.storage.set('id_event',this.id_event).then((store) => {
        return store;
      });
      return store;
    });

  }


}
