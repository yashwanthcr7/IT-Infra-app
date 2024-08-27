import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateManagementComponent } from './certificate-management.component';

describe('CertificateManagementComponent', () => {
  let component: CertificateManagementComponent;
  let fixture: ComponentFixture<CertificateManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
