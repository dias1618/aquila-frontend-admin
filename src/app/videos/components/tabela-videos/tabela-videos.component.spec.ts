import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaVideosComponent } from './tabela-videos.component';

describe('TabelaVideosComponent', () => {
  let component: TabelaVideosComponent;
  let fixture: ComponentFixture<TabelaVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
