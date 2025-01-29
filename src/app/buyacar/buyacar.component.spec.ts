import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyacarComponent } from './buyacar.component';

describe('BuyacarComponent', () => {
  let component: BuyacarComponent;
  let fixture: ComponentFixture<BuyacarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyacarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
