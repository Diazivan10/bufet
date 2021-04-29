import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggle: boolean = false;
  @Output() open: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
  }

  selectLeague(idioma: any) {
    this.translate.use(idioma.target.value);
  }

  show() {
    this.toggle = !this.toggle
    this.open.emit(this.toggle);
  }

}
