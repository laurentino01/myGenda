import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

type menu_item = {
  name: string;
  url: string;
};

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  menu_itens: menu_item[] = [
    {
      name: 'Início',
      url: '/dashboard',
    },
    {
      name: 'Calendário',
      url: '/calendario',
    },
  ];
}
