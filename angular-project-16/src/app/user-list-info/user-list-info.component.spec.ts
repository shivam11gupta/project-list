import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListInfoComponent } from './user-list-info.component';

describe('UserListInfoComponent', () => {
  let component: UserListInfoComponent;
  let fixture: ComponentFixture<UserListInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
