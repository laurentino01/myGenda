import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    SidenavComponent,
    DashboardComponent,
  ],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
})
export class DrawerComponent {
  showFiller = false;
}
