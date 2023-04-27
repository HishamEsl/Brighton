import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEquipmentComponent } from './profile-equipment.component';

describe('ProfileEquipmentComponent', () => {
  let component: ProfileEquipmentComponent;
  let fixture: ComponentFixture<ProfileEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
