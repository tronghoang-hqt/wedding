import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss'],
})
export class WeddingComponent implements OnInit {

  index = 0;
  active: boolean = true;
  srcView = "";
  slides = [
    "assets/img/gallery/LEX07764.JPG",
    "assets/img/gallery/LEX07822.JPG",
    "assets/img/gallery/LEX07862.JPG",
    "assets/img/gallery/LEX07942.jpg",
    "assets/img/gallery/LEX07985.JPG",
    "assets/img/gallery/LEX08243.JPG",
    "assets/img/gallery/LEX08002.JPG",
    "assets/img/gallery/LEX08048.JPG",
    "assets/img/gallery/LEX08073.JPG",
    "assets/img/gallery/LEX08131.jpg",
    "assets/img/gallery/LEX08200.jpg",
    "assets/img/gallery/LEX08160.JPG",
    "assets/img/gallery/LEX08183.JPG",
    "assets/img/gallery/LEX08214.JPG", 
  ]
  constructor() { 
  }

  ngOnInit(): void {
    this.srcView = this.slides[this.index];
  }

  clickPrevious(){
    if(this.index != 0){
      this.index = this.index - 1
      this.active = false;
    }
  }
  clickNext(){
    if(this.index != this.slides.length-1){
      this.index = this.index + 1
      this.active = false;
    }
  }
  onTransitionEnd(){
    this.srcView = this.slides[this.index];
    this.active = true;
  }
}
