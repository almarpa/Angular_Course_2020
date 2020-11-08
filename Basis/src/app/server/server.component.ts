import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  username: String = "";
  control: boolean = false;
  cont: number = 0;
  clicks: number[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onReset(){
    if(this.control == true) {
      this.control = false;
    }
    else {
      this.control = true;
    }

    this.cont = this.cont + 1;
    this.clicks.push(this.cont);
  }
}
