import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
import { getMaxListeners } from 'cluster';

@Component({
    selector: 'courses',
    template: `<input [(ngModel)] = "email" (keyUp.enter) = "onKey()" />
               `
})
export class CoursesComponent{
    email = "Enter your email";
  onKey(){
      console.log(this.email);
  }

}