import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss'],
})
export class HeaderCardComponent {
  @Input() title: string = '';

  constructor() {}
}
