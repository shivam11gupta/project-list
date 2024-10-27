import { Component, effect, signal } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { UserListInfoComponent } from '../user-list-info/user-list-info.component';
import { ResolveGuardGuard } from '../app.resolve';
import { HighlightDirective } from '../app.directive';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [CommonModule, PaginationComponent, UserListInfoComponent, HighlightDirective],
  providers: [ResolveGuardGuard],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
      console.log('the value of signalto ' + toSignal(this.counterObservable, {initialValue: 0}));
    });
  }

  userList: any = [];
  totalUser: number = 0;

  items = [] // Sample data
  totalItems = this.items.length;
  itemsPerPage = 10;
  currentPage = 1;
  count = signal(1);
  counterObservable = interval(1000);
  

  get currentPageData(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.items.slice(start, start + this.itemsPerPage);
  }

  ngOnInit() {
    this.getUserList();
  }

  addUserDetail(e: any) {
    this.count.set(4);
    this.router.navigate(['/dashboard/user-detail']);
  }

  getUserList() {
    if (localStorage.getItem('userList')) {
      this.items = JSON.parse(localStorage.getItem('userList') || '[]');
      this.totalItems = this.items.length;
    } else { 
      this.appService.getUserList().subscribe((response: any) => {
        this.items = response.users;
        this.totalItems = this.items.length;
        localStorage.setItem('userList', JSON.stringify(this.items));
      })
    }
  }

  editUser(user: any) {
    this.router.navigate(['/dashboard/user-detail', user.id], {relativeTo: this.route});
  }

  onPageChange(page: any): void {
    this.currentPage = page;
  }
}
