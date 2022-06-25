import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // gera um tag que pode ser utilizada em qlq lugar
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager'; // atrib. do componente


  name: String = 'Fernando'
}
