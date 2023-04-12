import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'interfaces',
    loadComponent: () => import('./interfaces/interfaces.page').then( m => m.InterfacesPage)
  },
  {
    path: 'pagina-contato',
    loadComponent: () => import('./contact-data/PaginaContatoPage').then( m => m.PaginaContatoPage)
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services.page').then( m => m.ServicesPage)
  },
];
