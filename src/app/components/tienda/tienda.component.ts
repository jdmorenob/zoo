import { Component } from '@angular/core';

@Component({
	selector: 'tienda',
	templateUrl: './tienda.component.html',
	styleUrls: ['./tienda.component.css']
})

export class TiendaComponent {
	public titulo: string;
	public nombreDelParque: string;

	constructor(){
		this.titulo = 'Esta es la tienda';
		this.nombreDelParque = 'Parque alamillo';
	}

	mostrarNombre() {
		console.log(this.nombreDelParque);
	}

	verDatosParque($event){
		console.log($event);
	}
}