import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { ReporteClienteComponent } from './reporte-cliente/reporte-cliente.component';
const routes: Routes = [
  { path: 'crear-cliente', component: CrearClienteComponent },
  { path: 'listar-cliente', component: ListarClienteComponent },
  { path: 'reporte-cliente', component: ReporteClienteComponent },
  { path : '', component : ListarClienteComponent}
];

export const routing = RouterModule.forRoot(routes);
