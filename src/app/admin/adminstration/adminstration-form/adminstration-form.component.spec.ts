import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstrationFormComponent } from './adminstration-form.component';

describe('AdminstrationFormComponent', () => {
  let component: AdminstrationFormComponent;
  let fixture: ComponentFixture<AdminstrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
