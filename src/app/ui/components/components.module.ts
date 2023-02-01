import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { DomainModule } from 'src/app/domain/domain.module';
import { CreateUserGateway } from 'src/app/domain/models/user/gateway/user.gateway';
import { UserService } from 'src/app/infrastructure/driven-adapter/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { PostCreateUserUseCase } from 'src/app/domain/usecases/user/user.usecase';

const usecaseFactory = (userGateway: CreateUserGateway) => new PostCreateUserUseCase(userGateway);
 export const usecaseprovider = {
  provide: CreateUserGateway,
  useFactory: usecaseFactory,
  deps: [CreateUserGateway]
 };


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DomainModule,
    HttpClientModule
  ],
  providers: [
    usecaseprovider,
    {
      provide: CreateUserGateway, useClass: UserService
    }
  ], exports:[UserComponent]
})
export class ComponentsModule { }
