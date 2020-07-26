import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoListaComponent } from './coordenacao-lista.component';

describe('CoordenacaoListaComponent', () => {
  let component: CoordenacaoListaComponent;
  let fixture: ComponentFixture<CoordenacaoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenacaoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
