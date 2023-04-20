import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainUpdateComponent } from './terrain-update.component';

describe('TerrainUpdateComponent', () => {
  let component: TerrainUpdateComponent;
  let fixture: ComponentFixture<TerrainUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrainUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
