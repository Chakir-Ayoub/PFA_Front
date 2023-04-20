import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePackeComponent } from './update-packe.component';

describe('UpdatePackeComponent', () => {
  let component: UpdatePackeComponent;
  let fixture: ComponentFixture<UpdatePackeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePackeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePackeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
