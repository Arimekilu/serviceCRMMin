import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FBService} from "./fb.service";
import {Client} from "../Interfaces/client.Interface";

@Injectable()

export class ClientService {

  getAllClients() {
    this.http.get(`${this.fbService.databaseURL}.clients.json`)
  }

  setClient(cliet: Client) {
    this.http.post(`${this.fbService.databaseURL}.clients.json`, cliet)
  }

  constructor(private http: HttpClient, private fbService: FBService) {
  }

}
