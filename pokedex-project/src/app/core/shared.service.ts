import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  changeAccents = new Subject();

  getChangeAccent(){
    return this.changeAccents.asObservable();
  }

}
