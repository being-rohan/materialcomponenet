import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseComponent } from './shared/component/course/course.component';
import { CoursedialogComponent } from './shared/component/coursedialog/coursedialog.component';
import { CourseCardComponent } from './shared/component/course-card/course-card.component';
import { CourseformComponent } from './shared/component/courseform/courseform.component';
import { HomeComponent } from './shared/component/home/home.component';
import { MatetrialModule } from './shared/material/matetrial/matetrial.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursedialogComponent,
    CourseCardComponent,
    CourseformComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatetrialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
