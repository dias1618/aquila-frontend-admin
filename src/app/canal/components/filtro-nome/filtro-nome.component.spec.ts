import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroNomeComponent } from './filtro-nome.component';

describe('FiltroNomeComponent', () => {
  let component: FiltroNomeComponent;
  let fixture: ComponentFixture<FiltroNomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroNomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
