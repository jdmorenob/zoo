import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'Bienvenido a NGZoo!';

  ngOnInit(){
  	console.log('Home component loaded');
  }
}
