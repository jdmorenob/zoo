import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'Home';

  ngOnInit(){
  	console.log('Home component loaded');
  }
}
