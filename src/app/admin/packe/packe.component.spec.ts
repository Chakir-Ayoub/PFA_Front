import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackeComponent } from './packe.component';

describe('PackeComponent', () => {
  let component: PackeComponent;
  let fixture: ComponentFixture<PackeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
