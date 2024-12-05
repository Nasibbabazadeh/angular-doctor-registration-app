import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private readonly _baseUrl: string = 'https://dummyjson.com'

  private readonly _headers: any = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': this._baseUrl
  })

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getMethod<T>(endpoint: string): Observable<T> {
    return this._httpClient.get<T>(`${this._baseUrl}/${endpoint}`, {
      headers: this._headers
    })
  }

  deleteById<T>(endpoint: string, id: string | number): Observable<T> {
    return this._httpClient.delete<T>(`${this._baseUrl}/${endpoint}/${id}`, {
      headers: this._headers
    })
  }

  postMethod<T>(endpoint: string, body: any): Observable<T> {
    return this._httpClient.post<T>(`${this._baseUrl}/${endpoint}`, body, { headers: this._headers })
  }
}
