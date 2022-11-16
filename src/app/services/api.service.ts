import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Charactere, Episode, GetCharactersAPI, GetLocationsResponse, Location } from '../interfaces/responseApi';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL: string = environment.baseURL

  constructor(private http: HttpClient) { }

  getCharacters(page = 1): Observable<GetCharactersAPI> {
    const url = `${this.baseURL}/character/?page=${page}`
    return this.http.get<GetCharactersAPI>(url)
  }

  getCharacter(id: string): Observable<Charactere> {
    const url = `${this.baseURL}/character/${id}`
    return this.http.get<Charactere>(url)
  }

  getLocations(page = 1): Observable<GetLocationsResponse> {
    const url = `${this.baseURL}/location/?page=${page}`
    return this.http.get<GetLocationsResponse>(url)
  }

  getLocation(id: string): Observable<Location> {
    const url = `${this.baseURL}/location/${id}`
    return this.http.get<Location>(url)
  }

  getEpisode(id: string): Observable<Episode> {
    const url = `${this.baseURL}/episode/${id}`
    return this.http.get<Episode>(url)
  }

}
