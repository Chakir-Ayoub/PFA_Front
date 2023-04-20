import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAbonnementComponent } from './update-abonnement.component';

describe('UpdateAbonnementComponent', () => {
  let component: UpdateAbonnementComponent;
  let fixture: ComponentFixture<UpdateAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAbonnementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
