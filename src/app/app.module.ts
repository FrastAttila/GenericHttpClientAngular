import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts/posts.component';
import { AlbumsComponent } from './albums/albums/albums.component';
import { AlbumsService } from './services/albums.service';
import { PostsService } from './services/posts.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BaseUrlInterceptor } from './base-url.interceptor';
import { GenericHttpClientService } from './services/generic/generic-http-client.service';

@NgModule({
  declarations: [AppComponent, PostsComponent, AlbumsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    AlbumsService,
    PostsService,
    GenericHttpClientService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
