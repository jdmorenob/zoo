import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const AdminRoutes: Routes = [
	{
		path: 'admin-panel',
		component: MainComponent,
		children: [
			{ path: '', redirectTo: 'listado', pathMatch: 'full' },
			{ path: 'listado', component: ListComponent },
			{ path: 'crear', component: AddComponent },
			{ path: 'editar', component: EditComponent },
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(AdminRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AdminRoutingModule { }