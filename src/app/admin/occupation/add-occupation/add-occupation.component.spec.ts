import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOccupationComponent } from './add-occupation.component';

describe('AddOccupationComponent', () => {
  let component: AddOccupationComponent;
  let fixture: ComponentFixture<AddOccupationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOccupationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
