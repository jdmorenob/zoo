import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { TiendaComponent } from './components/tienda/tienda.component';

const appRoutes:Routes = [
	{path: '', component: TiendaComponent},
	{path: '', redirectTo: 'tienda', pathMatch: 'full'},
	{path: 'tienda', component: TiendaComponent},
	{path: '**', component: TiendaComponent}
]

export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);