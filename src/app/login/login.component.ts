import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, startWith } from 'rxjs/operators';
import { environment } from '@env/environment';
import { AuthService } from '@shared/services/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading$!: Observable<boolean>;
  logoTitle = environment.logoTitle;
  appTitle = environment.appTitle;

  constructor(private router: Router, private authService: AuthService) {
    if (this.authService.loggedIn()) {
      this.router.navigateByUrl('dashboard');
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onLogin(): void {
    if (this.form.valid) {
      this.loading$ = this.authService.login(this.form.value).pipe(
        map((response) => response),
        startWith(true),
        catchError((error) => of(error))
      );
    }
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
