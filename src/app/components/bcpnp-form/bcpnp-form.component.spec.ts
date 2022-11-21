import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcpnpFormComponent } from './bcpnp-form.component';

describe('BcpnpFormComponent', () => {
  let component: BcpnpFormComponent;
  let fixture: ComponentFixture<BcpnpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcpnpFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcpnpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
