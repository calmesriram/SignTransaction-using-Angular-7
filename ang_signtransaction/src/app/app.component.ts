import { Component,OnInit } from '@angular/core';
import { RkserviceService } from './rkservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signTrans';
  constructor(private service :RkserviceService){}
  ngOnInit() {
// console.log(this.service.deploy)
  }

  deploy(){
    this.service.deploy();
  }
}
