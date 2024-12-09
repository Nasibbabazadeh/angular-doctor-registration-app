import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TUser, TUserResponse } from '../../models/users';
import { GenericService } from '../generic-service/generic-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _endpoint: string = 'users'
  constructor(
    private readonly _genericService: GenericService
  ) { }
  getAllUsers(): Observable<TUserResponse> {
    return this._genericService.getMethod<TUserResponse>(this._endpoint)
  }
  deleteUserById(userId: string | number): Observable<any> {
    return this._genericService.deleteById<any>(this._endpoint, userId)
  }
  createUser(userDetails: any): Observable<TUser> {
    return this._genericService.postMethod<TUser>(`${this._endpoint}/add`, userDetails)
  }
  editUserById(userDetails: any, userId: number): Observable<TUser> {
    return this._genericService.putMehod<TUser>(this._endpoint, userDetails, userId)
  }
}
