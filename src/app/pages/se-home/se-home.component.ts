import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-se-home',
  templateUrl: './se-home.component.html',
  styleUrls: ['./se-home.component.scss']
})
export class SeHomeComponent implements OnInit {

  constructor() { }
  calculatedLeftPosition = 160;
  observer:any

  ngOnInit(): void {
    this.rotateContinuously();
    this.ovservElement();
    this.scrollAnimation();
  }

  ovservElement() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  }

  scrollAnimation() {
    const hiddenElements = document.querySelectorAll('.custom-hidden');
    hiddenElements.forEach((e1) => this.observer.observe(e1));
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
