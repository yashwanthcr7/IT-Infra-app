import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule for ngClass
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isDropdownVisible: boolean = true;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
    this.isDropdownVisible = true;  // Keep the dropdown open
  }
}
