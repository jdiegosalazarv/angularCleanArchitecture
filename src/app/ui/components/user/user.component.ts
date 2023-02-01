import { Component, OnInit } from '@angular/core';
import { PostCreateUserUseCase } from 'src/app/domain/usecases/user/user.usecase';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string = '';
  job:string = '';

  constructor(private postCreateUserUseCase: PostCreateUserUseCase ) { }

  ngOnInit(): void {
  }

  service(){
    const data= {
      name: 'juan',
      job: 'trabajo'
    }
    this.postCreateUserUseCase.invoke(data).subscribe(result => {
      console.log(result);
      
    })
    
  }

}
