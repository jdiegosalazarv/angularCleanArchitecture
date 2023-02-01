import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { CreateUserGateway } from "../../models/user/gateway/user.gateway";
import { IUserModel } from "../../models/user/user.model";


@Injectable()
export class PostCreateUserUseCase{
    constructor(private createUserGateway: CreateUserGateway){
    }
    invoke(params: {name: string, job: string}): Observable<IUserModel | null> {
        return this.createUserGateway.createUser(params).pipe(
            catchError(() => {
                return of(null);
            })
        )
    }
}