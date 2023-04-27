import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileQualificationsComponent } from './profile-qualifications.component';

describe('ProfileQualificationsComponent', () => {
  let component: ProfileQualificationsComponent;
  let fixture: ComponentFixture<ProfileQualificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileQualificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
