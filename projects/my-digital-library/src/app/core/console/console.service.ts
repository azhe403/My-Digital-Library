import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConsoleService {

  env = environment;

  constructor() {
  }

  static log2(message: any, param?: any) {
    if (!environment.production) {
      if (param) {
        console.log(message, param);
      } else {
        console.log(message);
      }
    }
  }

  log(message: any, param?: any) {
    if (!this.env.production) {
      if (param) {
        console.log(message, param);
      } else {
        console.log(message);
      }
    }
  }
}
