import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Home',  icon: 'pe-7s-home', class: '' },
    { path: '/categorias', title: 'Categorias',  icon:'pe-7s-ribbon', class: '' },
    { path: '/canal', title: 'Canais',  icon:'pe-7s-prev', class: '' },
    { path: '/videos', title: 'Videos',  icon:'pe-7s-film', class: '' },
    { path: '/usuarios', title: 'Usuários',  icon:'pe-7s-user', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
