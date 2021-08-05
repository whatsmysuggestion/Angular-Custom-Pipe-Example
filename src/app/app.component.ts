import { Component } from '@angular/core';
import {GenderPipe} from './gender.pipe';
@Component({
  selector: 'app-root',
  template:"{{'female'|gender}} Vinay"
})
export class AppComponent {
  
}
