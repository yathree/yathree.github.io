import { Component, OnInit } from '@angular/core';
import { SettingMenu } from '@app/shared/models/setting-menu.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  menus: SettingMenu[] = [];

  constructor() {}

  ngOnInit(): void {
    this.menus = [
      {
        title: 'Manage Staffs',
        icon: 'manage_accounts',
        url: 'staffs',
      },
      {
        title: 'Manage Hospitals',
        icon: 'medication',
        url: 'hospitals',
      },
      {
        title: 'Manage Doctors',
        icon: 'bloodtype',
        url: 'doctors',
      },
      {
        title: 'Manage Schools',
        icon: 'school',
        url: 'schools',
      },
      {
        title: 'School Managers',
        icon: 'contact_phone',
        url: 'managers',
      },
      {
        title: 'Manage Instructors',
        icon: 'airline_seat_recline_normal',
        url: 'instractors',
      },
      {
        title: 'Manage Restrictions',
        icon: 'no_accounts',
        url: 'restrictions',
      },
      {
        title: 'Payment Structures',
        icon: 'currency_exchange',
        url: 'payment-structure',
      },
      {
        title: 'Driving License Classes',
        icon: 'credit_card',
        url: 'driving-license-classes',
      },
      {
        title: 'Driving Cars',
        icon: 'directions_car',
        url: 'cars',
      },
    ];
  }
}
