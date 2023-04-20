import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackeComponent } from './add-packe.component';

describe('AddPackeComponent', () => {
  let component: AddPackeComponent;
  let fixture: ComponentFixture<AddPackeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPackeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPackeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
