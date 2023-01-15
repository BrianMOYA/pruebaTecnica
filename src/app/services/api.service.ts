import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient ) { }

  postRegister(data : any) {
    return this.http.post<any>("http://localhost:3000/FileformatRegister/",data);
  }

  getRegister(){
    return this.http.get<any>("http://localhost:3000/FileformatRegister/");
  }

  putFile(data:any,id : number){
    return this.http.put<any>("http://localhost:3000/FileformatRegister/"+ id , data)
  }

  deleteFile(id:number){
    return this.http.delete<any>("http://localhost:3000/FileformatRegister/"+ id)
  }
}
