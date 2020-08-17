import { Component, OnInit } from '@angular/core';
import { DictionaryService, IWord } from 'src/app/service/dictionary/dictionary.service';
import { AuthService } from 'src/app/service/author/auth.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent implements OnInit {
  listWord: IWord[]=[];

  constructor(private dictionaryService: DictionaryService, public authService: AuthService) { }

  ngOnInit(): void {
    this.listWord = this.dictionaryService.getAll();
  }

}
