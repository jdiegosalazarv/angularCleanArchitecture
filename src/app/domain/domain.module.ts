import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateUserUseCase } from './usecases/user/user.usecase';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PostCreateUserUseCase
  ]
})
export class DomainModule { }
