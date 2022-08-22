import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {AboutComponent} from './components/about/about.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/services/in-memory-data.service';
import {MdbCollapseModule, MdbScrollspyModule} from 'mdb-angular-ui-kit';
import {ActivityComponent} from './components/activity/activity.component';
import { HomeComponent } from './components/home/home.component';
import {ModalModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ActivityComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    MdbCollapseModule,
    MdbScrollspyModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
