import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html'
})
export class KeeperComponent implements OnInit {
  title = 'Keepers';

  ngOnInit(){
  	console.log('Keepers component loaded');
  }
}