import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciayproyectosComponent } from './experienciayproyectos.component';

describe('ExperienciayproyectosComponent', () => {
  let component: ExperienciayproyectosComponent;
  let fixture: ComponentFixture<ExperienciayproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciayproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciayproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
