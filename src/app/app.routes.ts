import { Routes } from '@angular/router';
import { CertificateManagementComponent } from './certificate-management/certificate-management.component';
import { CostManagementComponent } from './cost-management/cost-management.component';

export const routes: Routes = [
  { path: 'certificate-management', component: CertificateManagementComponent },
  { path: 'cost-management', component: CostManagementComponent },
  { path: '', redirectTo: '/certificate-management', pathMatch: 'full' }
];
