import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
 standalone: true,
  selector: 'app-user-detail-parent',
  templateUrl: './user-detail-parent.component.html',
  styleUrl: './user-detail-parent.component.scss'
})
export class UserDetailParentComponent {
   public isChildSupported: Boolean = false;

   constructor(public appService: AppService) {

   }

   ngOninit() {
      this.userName();
   } 

   userName() {
    console.log('shivam gupta name coming from parent class');
    this.appService.getInheritedName();
   }
}
