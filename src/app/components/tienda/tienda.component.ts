import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

declare var jQuery:any;
declare var $:any;

@Component({
	selector: 'tienda',
	templateUrl: './tienda.component.html',
	styleUrls: ['./tienda.component.css'],
	animations: [ fadeIn ]
})

export class TiendaComponent implements OnInit{
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

	ngOnInit(){
		$('#caja').dotdotdot();
		$('#textojq').hide();
		$('#botonjq').click(function() {
			console.log('click desde jquery');
			$('#textojq').slideToggle();
		});
	}
}