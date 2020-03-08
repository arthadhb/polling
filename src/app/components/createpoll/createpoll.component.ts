import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';
import { User } from 'src/app/model/model.user';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {CreatepollService} from 'src/app/services/createpoll.service'
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Survey, Question, Option } from './data-models';
import { CreatePoll } from 'src/app/model/model.createpoll';
export interface QuestionType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {

  currentUser: User;
  createPoll:CreatePoll=new CreatePoll();
  myForm: FormGroup;
  constructor(private fb: FormBuilder,private route: ActivatedRoute,public authService: AuthService,public router: Router,private createPollService: CreatepollService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.myForm= this.fb.group({
      id: this.fb.control('', Validators.required),
      title: this.fb.control('', Validators.required),
      options: this.fb.array([
        this.fb.control('', Validators.required)
      ])
    })
   }
   ngOnInit() {
    console.log('currentUser', this.currentUser);
    
  }
  // addPhone(): void {
  //   (this.myForm.get('options') as FormArray).push(
  //     this.fb.control('', Validators.required)
  //   );
  // }
  // removePhone(index) {
  //   (this.myForm.get('options') as FormArray).removeAt(index);
  // }

  // getPhonesFormControls(): AbstractControl[] {
  //   return (<FormArray> this.myForm.get('options')).controls
  // }

  createPollDetails() {
    console.log();
    this.createPollService.createNewPoll(this.createPoll).subscribe(data => console.log(data), error => console.log(error));
    this.createPoll=new CreatePoll();
  }
// login out from the app
logOut(){
  localStorage.removeItem('currentUser');
  this.router.navigate(['/logout']);
}

}
