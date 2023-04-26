import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOccupationComponent } from './update-occupation.component';

describe('UpdateOccupationComponent', () => {
  let component: UpdateOccupationComponent;
  let fixture: ComponentFixture<UpdateOccupationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOccupationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
