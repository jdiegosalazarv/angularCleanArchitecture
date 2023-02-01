import { IUserModel } from "../user.model";
import { Observable } from 'rxjs'

export abstract class CreateUserGateway{
    abstract createUser(params: {name: string, job: string}): Observable<IUserModel>;
}