import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { HomeComponent } from './home/home.component';
import { DogListService } from './dogs-list/services/dog-list.service';
import { DogsListElementComponent } from './dogs-list/dogs-list-element/dogs-list-element.component';
import { DogsListElementEditComponent } from './dogs-list/dogs-list-element/dogs-list-element-edit/dogs-list-element-edit.component';
import { HelpComponent } from './help/help.component';
import { MockedHttpService } from './utils/mocked-http.service';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { AccountService } from './account/services/account.service';
import { TextCollapsePipe } from './common/pipes/text-collapse.pipe';
import { ElementCursorDirective } from './common/directives/element-cursor.directive';


@NgModule({
  declarations: [
    AppComponent,
    DogsListComponent,
    HomeComponent,
    DogsListElementComponent,
    DogsListElementEditComponent,
    HelpComponent,
    AccountComponent,
    TextCollapsePipe,
    ElementCursorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DogListService, MockedHttpService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
