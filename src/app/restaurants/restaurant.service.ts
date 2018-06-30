import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';
import { MEAT_API } from '../app.api';

@Injectable()

export class RestaurantService {
  constructor(private http: HttpClient) {}

  restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined;
    if (params) {
      params = new HttpParams().set('q', search);
    }
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params});
      /* É necessário fazer o map porque nessa chamada vai retornar um objeto chamado Response.
      O tipo Response tem outros dados, tem o status code, tem os proprios dados que esperamos receber, as possiveis mensagens de erros. */
      /* Mas como estamos apenas interessado nos dados json. */
      /* Nesse caso estou trocando a resposta do response pelos dados json. */
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }

}
