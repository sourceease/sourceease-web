import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-se-header',
  templateUrl: './se-header.component.html',
  styleUrls: ['./se-header.component.scss']
})
export class SeHeaderComponent implements OnInit {

  @Input() scrollThreshold2: boolean | undefined;
  hmbrOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  openHmbg() {
    this.hmbrOpen = !this.hmbrOpen;
  }

}
