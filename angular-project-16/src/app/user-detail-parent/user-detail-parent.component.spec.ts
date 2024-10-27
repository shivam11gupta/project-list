import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailParentComponent } from './user-detail-parent.component';

describe('UserDetailParentComponent', () => {
  let component: UserDetailParentComponent;
  let fixture: ComponentFixture<UserDetailParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
