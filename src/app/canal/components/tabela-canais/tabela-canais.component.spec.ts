import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCanaisComponent } from './tabela-canais.component';

describe('TabelaCanaisComponent', () => {
  let component: TabelaCanaisComponent;
  let fixture: ComponentFixture<TabelaCanaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCanaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaCanaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
