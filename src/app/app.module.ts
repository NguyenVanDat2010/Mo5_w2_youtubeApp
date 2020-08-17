import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubePlaylistComponent } from './views/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './views/youtube-player/youtube-player.component';
import { DictionaryPageComponent } from './views/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './views/dictionary-detail/dictionary-detail.component';
import { DictionaryComponent } from './views/dictionary/dictionary.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    DictionaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
