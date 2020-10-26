import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaViewComponent } from './pelicula-view.component';

describe('PeliculaViewComponent', () => {
  let component: PeliculaViewComponent;
  let fixture: ComponentFixture<PeliculaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
