import { Component } from '@angular/core';

@Component({
  selector: 'app-cost-management',
  templateUrl: './Distill-cost-management.html',  // Or 'distill-cost-management.component.html'
  styleUrls: ['./cost-management.component.css']
})
export class DistillCostManagementComponent {
  
  // This is where you would add future logic to interact with your table
  tableData = [
    { item: 1, description: '', cost: '', date: '' },
    { item: 2, description: '', cost: '', date: '' },
    { item: 3, description: '', cost: '', date: '' },
    { item: 4, description: '', cost: '', date: '' },
    { item: 5, description: '', cost: '', date: '' },
    { item: 6, description: '', cost: '', date: '' },
    { item: 7, description: '', cost: '', date: '' },
    { item: 8, description: '', cost: '', date: '' },
    { item: 9, description: '', cost: '', date: '' },
    { item: 10, description: '', cost: '', date: '' },
  ];

  constructor() {}

  // Future methods to manage the table data can be added here
}
