import { CommonModule } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanDeactivate, Router } from '@angular/router';
import {createCustomElement} from '@angular/elements';
import {PopupComponent} from './../popup/popup.component';
import {PopupService} from './../popup/popup.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [FormsModule, CommonModule, PopupComponent],
  providers: [PopupService]
})
export class LoginComponent {
  loginData: any = {};
  showError: boolean = false;

  constructor(private router: Router, injector: Injector, public popup: PopupService,) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }

  submitLogin() {
    this.showError = false;
    if (this.loginData && this.loginData.email == 'admin@gmail.com' && this.loginData.password == 'password') {
      localStorage.setItem('loginDetail', JSON.stringify(this.loginData));
      this.router.navigate(['dashboard']);
    } else {
       this.showError = true;
    }
  }
}
