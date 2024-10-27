import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-user-list-info',
  templateUrl: './user-list-info.component.html',
  styleUrl: './user-list-info.component.scss'
})
export class UserListInfoComponent {
  @Input() totalRecord = 0;
  @Output() addUser = new EventEmitter<string>();

  constructor() {
   
  }


  addUserPage() {
    this.addUser.emit('');
  }
}
