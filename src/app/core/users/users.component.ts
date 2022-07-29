import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user.model';
import { Store } from '@ngrx/store';
import { blockUser, loadUsers, unblockUser } from './state/user.actions';
import { flatUsers } from './state/user.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  flatUsers$ = this.store.select(flatUsers);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  onBlockOrUnblock(user: User) {
    const action = user.isEnabled ? blockUser(user) : unblockUser(user);
    this.store.dispatch(action);
  }
}
