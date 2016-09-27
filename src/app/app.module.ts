import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Routing
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

// Custom
import { EventsModule } from './events/events.module';
import { ArticlesModule } from './articles/articles.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    EventsModule,
    ArticlesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
