import { Component, OnInit, OnDestroy } from '@angular/core';
import { IWord, DictionaryService } from 'src/app/service/dictionary/dictionary.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {
  word: IWord;
  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    /**phương thức subscribe để theo dõi các thay đổi của dữ liệu hoặc
     * nhận về kết quả của một công việc nào đó.
     * */
    /**activatedRoute kiểm tra tất cả các thay đổi trên URL của trang và lấy parameters từ route
     * Để lấy được thông tin của route hiện tại: url, param, query param, etc.abs
     * lấy params "keyPath" từ url và lấy "word" để hiển thị từ IWord. Ta thực hiện trong ngOnInit
    */
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      const key = paramMap.get('keyPath');
      const meaning = this.dictionaryService.search(key);
      this.word = {
        key: key,
        meaning: meaning
      };
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }

}
