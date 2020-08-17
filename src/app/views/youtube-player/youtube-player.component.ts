import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { YoutubeService } from 'src/app/service/youtube/youtube.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit, OnDestroy {
  song: any;
  sub: Subscription;

  constructor(private youtubeService: YoutubeService,
    private activateRouter: ActivatedRoute,
    private domsanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.sub = this.activateRouter.paramMap.subscribe((paramMap: ParamMap)=>{
      const id = paramMap.get('id');
      this.song = this.youtubeService.find(id);
    });
  }

  getSrc(){
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domsanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }

}
