import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  public angularVersion = VERSION.full;
}
