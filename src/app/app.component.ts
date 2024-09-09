import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";


// import {app_to}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'IT-Infra-app';
}
