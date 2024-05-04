import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {

  constructor(private _matsanck: MatSnackBar) { }


  open(msg: string) {
    this._matsanck.open(msg, 'close', {
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      duration: 2500
    })

  }
}
