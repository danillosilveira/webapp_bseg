import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import {AuthService} from "../services/auth.service";


@Injectable()
export class AuthGuard implements CanActivate{

  constructor( private autenticacao: AuthService ){}

  canActivate(): boolean {
    return this.autenticacao.authenticated_user()
  }
}
