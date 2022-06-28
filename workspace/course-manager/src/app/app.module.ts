import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { Error404Component } from './erro-404/erro-404.component';
import { CourseModule } from './courses/course-module';
import { CoreModule } from './component/core.module';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([ //Navega entre os menus
        {
          path: '', redirectTo: 'courses', pathMatch:'full' // rota '' padrao do angular 
        },
        {
          path: '**', component:Error404Component // rota '**' 
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
