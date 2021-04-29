import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() bandera: boolean = false;
  @Output() hidden: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private router: Router,
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
  }

  selectLeague(idioma: any) {
    this.translate.use(idioma.target.value);
  }

  goMenu(menu:string) {
    switch (menu) {
      case 'HOME':
        this.router.navigate([""]);
        this.close();
        break;
      case 'ABOUTUS':
        this.router.navigate(["/nosotros"]);
        this.close();
        break;
      case 'LAWYER':
        this.router.navigate(["/abogados"]);
        this.close();
        break;

      default:
        break;
    }
  }

  close() {
    this.hidden.emit(false);
  }

}
