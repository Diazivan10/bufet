import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormsModule, FormBuilder, Validators, NgModel } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { TranslateService } from '@ngx-translate/core';
import { map } from "rxjs/operators";
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
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay]);

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  toggle: boolean = false;
  @Output() open: EventEmitter<boolean> = new EventEmitter();
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
  

  constructor(private _http: HttpClient, private toastr: ToastrService, private translate: TranslateService){}
    
  
  ngOnInit(): void {
  }
  selectLeague(idioma: any) {
    this.translate.use(idioma.target.value);
  }
  show() {
    this.toggle = !this.toggle
    this.open.emit(this.toggle);
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
// sendGetRequest() {
//     return this._http.get('http://localhost/enviocorreos/envio_correos.php');
//   }

guardar(Form: NgForm){

  console.log(Form.value);

// this._http
//       .post(`https://localhost/2021/enviocorreos/envio_correos.php`,Form.value)
//       .pipe(
//         map(resp => {
//             console.log(resp);
//         })
//       );

this._http.put('https://criminallegalassociates.com/envioCorreos/prueba.php',  Form.value ).subscribe(data => {
      //  var datajson = JSON.stringify(data);

console.log(data);

    


       if (data == true) {
        this.toastr.success('Sus Datos se enviaron Correctamente // Your data was sent correctly'  ,  '| Criminal Legal Associates |');
        
Form.reset();

}else{
  this.toastr.warning(' Faltan Campos por Diligenciar // Missing fields to fill out'  ,  '| Criminal Legal Associates')
}


    })
   
    
   
   

// this._http.get('http://localhost/enviocorreos/envio_correos.php')
// .subscribe(data => {   // data is already a JSON object
//     console.log(data);
// });

// this.sendGetRequest().subscribe((responseBody) => {
//       console.log(responseBody);
// });

// this._http.get('http://localhost/2021/enviocorreos/envio_correos.php').subscribe(data => console.log(data));


}
usuario = {
  nombre: "",
  telefono: "",
  correo: "",
  mensaje: ""
}
}


  