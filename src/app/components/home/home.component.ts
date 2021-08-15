import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('slides') public slides: any;
  @ViewChild('slides2') public slides2: any;

  changeAlone: any

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

  sendEmail(nome: string, email: string, mensagem: string): void {
    var link = "mailto:inscricao@recruta.net"
      + "?"
      + "subject=" + "Contacto de " + nome
      + "&body=" + mensagem + " email: " + email;
    window.location.href = link;
  }

}
