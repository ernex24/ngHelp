import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {ArticulosService} from './shared/articulos.service';

import {HttpClientModule} from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';
import {ImageFilterPipe} from './shared/filter.pipe';
import {RouterModule} from '@angular/router';
import { appRoutes} from './routes';
import {HttpModule} from '@angular/http';

// NG Video
import {VgBufferingModule} from 'videogular2/buffering';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgControlsModule} from 'videogular2/controls';
import {VgCoreModule} from 'videogular2/core';
import {ClickOutsideModule} from 'ng-click-outside';
import {ModalModule} from 'ngx-bootstrap';
import {ScrollbarModule} from 'ngx-scrollbar';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ImageFilterPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgPipesModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    ClickOutsideModule,
    ModalModule.forRoot(),
    ScrollbarModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule
  ],
  providers: [ArticulosService, ImageFilterPipe],
  bootstrap: [AppComponent ]
})
export class AppModule { }

