import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';

@Injectable()

export class RestaurantService {
  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
      /* 
      É necessário fazer o map porque nessa chamada vai retornar um objeto chamado Response, e o tipo Response tem outros dados, tem o status code, tem os proprios dados que esperamos receber, as possiveis mensagens de erros.
      Mas como estamos apenas interessado nos dados json.
      Nesse caso estou trocando a resposta do response pelos dados json.
      */
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }

}