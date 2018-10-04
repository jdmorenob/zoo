import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
          <div *ngIf="emailContacto">
            <h4>{{title}}</h4>
            <span><strong>Email de contacto:</strong> {{emailContacto}}
              <button class="btn btn-default" (click)="borrarEmail()">Borrar Email</button>
            </span>
          </div>
  `
})

export class MostrarEmailComponent implements DoCheck, OnInit {
  title = 'Mostrar email';
  emailContacto: string;

  ngOnInit(){
    this.emailContacto = localStorage.getItem('email');
  }

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('email');
  }

  borrarEmail(){
    localStorage.removeItem('email');
    this.emailContacto = null;
  }
}