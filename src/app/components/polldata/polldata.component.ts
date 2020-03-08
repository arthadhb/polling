
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/model.user';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-polldata',
  templateUrl: './polldata.component.html',
  styleUrls: ['./polldata.component.css']
})
export class PolldataComponent implements OnInit {
  currentUser: User;
  constructor(private route: ActivatedRoute,public authService: AuthService,public router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }
  
  ngOnInit() {
    console.log('currentUser', this.currentUser);
  }
// login out from the app
logOut(){
  localStorage.removeItem('currentUser');
  this.router.navigate(['/logout']);
}


}
