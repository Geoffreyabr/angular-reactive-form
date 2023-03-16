import { Component } from '@angular/core';
import { User } from '../data/form';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

model: User = new User ( '','','','');

onSubmit(){
  console.log(this.model)
}
}


