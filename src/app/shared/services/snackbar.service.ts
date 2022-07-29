import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) { }

  create(message: string, duration = 2000) {
    this.snackbar.open(message, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration,
    });
  }
}
