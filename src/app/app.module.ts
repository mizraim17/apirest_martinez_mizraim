import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ContentComponent } from './core/components/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontSizeDirective } from './directives/font-size.directive';

import { HomeComponent } from './core/components/home/home.component';
import { PaginaErrorComponent } from './core/components/pagina-error/pagina-error.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FontSizeDirective,
    HomeComponent,
    PaginaErrorComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
