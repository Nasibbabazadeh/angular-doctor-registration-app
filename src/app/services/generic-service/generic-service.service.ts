import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  private readonly _baseUrl: string = 'https://dummyjson.com'
  constructor(
    private readonly _httpClient: HttpClient
  ) { }
  getMethod<T>(endpoint: string): Observable<T> {
    return this._httpClient.get<T>(`${this._baseUrl}/${endpoint}`)
  }
}
