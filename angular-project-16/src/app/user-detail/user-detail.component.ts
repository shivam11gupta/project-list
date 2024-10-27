import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserDetailParentComponent } from './../user-detail-parent/user-detail-parent.component'
import { AppService } from '../app.service';
import { CommonModule, NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import { UserNoteComponent } from '../user-note/user-note.component';
import { FormsModule } from '@angular/forms';
import { MyCustomTransformationPipe } from '../app.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, UpperCasePipe, UserNoteComponent, NgTemplateOutlet, FormsModule, MyCustomTransformationPipe],
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
  host: {
    '[attr.aria-valuenow]': 'true',
    '[class.active]': 'true',
    '[tabIndex]': 'disabled ? -1 : 0',
    '(click)': 'updateValue($event)',
  },
})
export class UserDetailComponent extends UserDetailParentComponent {   // inheritance example
  userData: any = {};
  userList: any = [];
  isEdited: boolean = false;
  isSubmit: boolean = false;
  
  constructor(private route: ActivatedRoute, public override appService: AppService, private router: Router) {
     super(appService);
  }

  ngOnInit() {
    super.ngOninit();   // it is required because without it UserDetailComponent ngOnInit override parent class ngOnInit()
    console.log('the value from parent is ', this.isChildSupported)
    this.route.params.subscribe((param) => {
    if (param && param['id']) {
      this.isEdited = true;
      this.userList = JSON.parse(localStorage.getItem('userList') || '[]');
      this.userData = this.userList.find((obj: { id: any; }) => {
        return obj.id == param['id'];
      });
    }
    })
  }

  updateValue(e: any) {
   console.log('host property working');
  }

  canDeactivate(): boolean {
    if (!this.isSubmit) {
      const result = window.confirm('There are unsaved changes! Are you sure?');
      return result;
    }
    return true;
  }

  submitUser(userform: any) {
    this.isSubmit = true;
    if (!this.isEdited) {
      this.userList = JSON.parse(localStorage.getItem('userList') || '[]');
      this.userData['id'] = this.userList.length + 1;
      this.userList.splice(0, 0, this.userData);
    } else {
      this.userList.splice((this.userData.id -1), 1, this.userData);
    }
    localStorage.setItem('userList', JSON.stringify(this.userList));
    userform.reset();
    this.router.navigate(['/dashboard/user-list']);
  }
}
