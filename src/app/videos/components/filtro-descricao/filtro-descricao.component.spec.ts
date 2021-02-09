import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroDescricaoComponent } from './filtro-descricao.component';

describe('FiltroDescricaoComponent', () => {
  let component: FiltroDescricaoComponent;
  let fixture: ComponentFixture<FiltroDescricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroDescricaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
