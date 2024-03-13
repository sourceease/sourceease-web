import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-se-home',
  templateUrl: './se-home.component.html',
  styleUrls: ['./se-home.component.scss']
})
export class SeHomeComponent implements OnInit {

  constructor() { }
  calculatedLeftPosition = 160;

  ngOnInit(): void {
    this.rotateContinuously();
  }

  rotateContinuously(): void {
    let leftToRight:any;
    let rightToLeft:any;
    if (this.calculatedLeftPosition > -4000) {
      leftToRight = setInterval(() => {
        this.calculatedLeftPosition -= 2;
        if (this.calculatedLeftPosition == -4000) {
          clearInterval(leftToRight);
          rightToLeft = setInterval(() => {
            this.calculatedLeftPosition += 2;
            if (this.calculatedLeftPosition == 160) {
              clearInterval(rightToLeft);
              this.rotateContinuously();
            }
          }, 50);
        }
      }, 50);
    }
    // Adjust interval for desired rotation speed
  }

}
