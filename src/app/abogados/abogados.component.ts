import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-abogados',
  templateUrl: './abogados.component.html',
  styleUrls: ['./abogados.component.css']
})
export class AbogadosComponent implements OnInit {
  toggle: boolean = false;
  @Output() open: EventEmitter<boolean> = new EventEmitter();
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }
  selectLeague(idioma: any) {
    this.translate.use(idioma.target.value);
  }
  show(){
    this.toggle = !this.toggle
    this.open.emit(this.toggle);
  }

}
