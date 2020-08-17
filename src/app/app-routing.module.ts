import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { YoutubePlaylistComponent } from './views/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './views/youtube-player/youtube-player.component';
import { DictionaryPageComponent } from './views/dictionary-page/dictionary-page.component';
import { DictionaryComponent } from './views/dictionary/dictionary.component';
import { DictionaryDetailComponent } from './views/dictionary-detail/dictionary-detail.component';

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children:[{
      path: ':keyPath',
      component: DictionaryDetailComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
