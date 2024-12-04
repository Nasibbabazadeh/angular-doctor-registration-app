import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TUserResponse } from '../../models/users';
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
}
