import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaLinksComponent } from './llista-links.component';

describe('LlistaLinksComponent', () => {
  let component: LlistaLinksComponent;
  let fixture: ComponentFixture<LlistaLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
