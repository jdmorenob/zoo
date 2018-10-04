import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  public title = 'Contacto';
  public emailContacto: string;

  ngOnInit(){
  	console.log('Contact component loaded');
  }

  guardarEmail(){
  	localStorage.setItem('email', this.emailContacto);
  }
}