import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor(private http : HttpService) { }

  list(){
    return this.http.get('/users')
  }

  get(id : number){
    return this.http.get('/users/'+id)
  }
}
