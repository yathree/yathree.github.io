import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
}
