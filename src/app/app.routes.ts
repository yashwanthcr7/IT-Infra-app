import { Routes } from '@angular/router';
import { CertificateManagementComponent } from './certificate-management/certificate-management.component';
import { SonataCostManagementComponent } from './cost-management/sonata-cost-management';
import { DistillCostManagementComponent } from './cost-management/Distill-cost-management';

export const routes: Routes = [
  { path: 'certificate-management', component: CertificateManagementComponent },
  // { path: 'cost-management', component: CostManagementComponent },
  { path: 'Sonatacost-management', component:SonataCostManagementComponent},
  {path:'Distillcost-management', component:DistillCostManagementComponent},
  { path: '', redirectTo: '/certificate-management', pathMatch: 'full' }
];
