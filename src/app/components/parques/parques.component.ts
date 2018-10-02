import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'parques',
	templateUrl: './parques.component.html',
	styleUrls: ['./parques.component.css']
})

export class ParquesComponent {

	@Input() titulo: string;
	public metros: number;
	public vegetacion: string;
	public abierto: boolean;
	@Output() data = new EventEmitter();

	constructor(){
		this.titulo = "Parque natural para caballos";
		this.metros = 450;
		this.vegetacion = "Alta";
		this.abierto = false;
	}

	emitirEvento(){
		this.data.emit({
			'nombre': this.titulo,
			'metros': this.metros,
			'vegetacion' : this.vegetacion,
			'abierto': this.abierto
		});
	}
}