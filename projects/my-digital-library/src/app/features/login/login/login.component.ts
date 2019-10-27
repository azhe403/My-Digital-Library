import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ConsoleService } from '../../../core/console/console.service';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/animations/route.animations';
import { AuthGuardService } from '../../../core/auth/auth-guard.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/core.state';
import { authLogin } from '../../../core/core.module';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'anms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  isAuthenticated$: Observable<boolean>;

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private console: ConsoleService,
    private authService: AuthGuardService,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.ngOnInit();
  }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.form);
    let username = this.form.controls.username.value;
    let password = this.form.controls.password.value;

    if (username == 'indemo' && password == '1234') {
      console.log('You are logged in..');
      this.store.dispatch(authLogin());
    } else {
      Swal.fire('403: Login', 'Your username or password invalid.')
        .then(res => this.console.log(res))
    }
  }

}
