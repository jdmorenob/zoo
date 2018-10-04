import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  animations: [fadeIn]
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