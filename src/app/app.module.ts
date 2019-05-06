import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { HomeComponent } from './home/home.component';
import { DogListService } from './dogs-list/services/dog-list.service';
import { DogsListElementComponent } from './dogs-list/dogs-list-element/dogs-list-element.component';
import { DogsListElementEditComponent } from './dogs-list/dogs-list-element/dogs-list-element-edit/dogs-list-element-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsListComponent,
    HomeComponent,
    DogsListElementComponent,
    DogsListElementEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DogListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
