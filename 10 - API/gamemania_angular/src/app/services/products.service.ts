import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Cards} from "../interfaces/cards"
import { Propaganda } from '../interfaces/propaganda';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

    urlproduct = 'http://localhost:3000/product';
    urlpropbar = "http://localhost:3000/propbar";

    constructor ( private httpClient: HttpClient ) { }
  
    getposts(): Observable<Cards[]> {
        return this.httpClient.get<Cards[]>(this.urlproduct)
    }

    getpropbar(): Observable<Propaganda[]> {
      return this.httpClient.get<Propaganda[]>(this.urlpropbar)
    }

}




