import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  Virtual,
  Autoplay,
  SwiperOptions,
  A11y,
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay]);

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1.5,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // init: false,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }
  };
  // Create array with 1000 slides
  slides = Array.from({ length: 10 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
