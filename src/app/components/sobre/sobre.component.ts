import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  @ViewChild('slides') public slides: any;
  @ViewChild('slides2') public slides2: any;

  constructor() { }

  ngOnInit(): void {
  }


  onSwiper(swiper: any) {
  }

  previousSlide(slide: number): void {
    if (slide === 1) {
      this.slides.swiperRef.slidePrev();
    } else if (slide === 2) {
      this.slides2.swiperRef.slidePrev();
    }
  }

  nextSlide(slide: number): void {
    if (slide === 1) {
      this.slides.swiperRef.slideNext();
    } else if (slide === 2) {
      this.slides2.swiperRef.slideNext();
    }
  }

  smoothScroll(h: number, terminate: number): void {
    let i = h || 0;
    if (i < terminate) {
      setTimeout(() => {
        window.scrollTo(0, i);
        this.smoothScroll(i + 30, terminate);
      }, 0.5);
    }
  }

  scroll(): void {
    this.smoothScroll(0, 800)
  }

}
