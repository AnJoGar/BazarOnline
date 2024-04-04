import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaBusquedaComponent } from './caja-busqueda.component';

describe('CajaBusquedaComponent', () => {
  let component: CajaBusquedaComponent;
  let fixture: ComponentFixture<CajaBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaBusquedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
