import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaLinksComponent } from './tarjeta-links.component';

describe('TarjetaLinksComponent', () => {
  let component: TarjetaLinksComponent;
  let fixture: ComponentFixture<TarjetaLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
