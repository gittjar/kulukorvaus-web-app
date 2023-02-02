import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LomakepohjaComponent } from './lomakepohja.component';

describe('LomakepohjaComponent', () => {
  let component: LomakepohjaComponent;
  let fixture: ComponentFixture<LomakepohjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LomakepohjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LomakepohjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
