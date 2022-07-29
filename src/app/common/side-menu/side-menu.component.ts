import { Component, OnInit } from '@angular/core';
import { role } from '@shared/enums/role.enum';
import { Menu } from '@shared/models/menu';
import { MenusService } from '@shared/services/menus.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  role = role;
  menus: Menu[] = [];

  constructor(private menuService: MenusService) { }

  ngOnInit(): void {
    this.menus = this.menuService.getMenus();
  }
}
