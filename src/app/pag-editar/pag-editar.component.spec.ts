import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagEditarComponent } from './pag-editar.component';

describe('PagEditarComponent', () => {
  let component: PagEditarComponent;
  let fixture: ComponentFixture<PagEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
