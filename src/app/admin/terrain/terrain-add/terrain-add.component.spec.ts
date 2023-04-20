import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainAddComponent } from './terrain-add.component';

describe('TerrainAddComponent', () => {
  let component: TerrainAddComponent;
  let fixture: ComponentFixture<TerrainAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrainAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
