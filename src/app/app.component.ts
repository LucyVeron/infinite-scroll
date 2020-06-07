import { Component } from '@angular/core';
import { GifService } from './gif.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public gifs: any[];
  public query: string;

  constructor(private gifService: GifService) { }

  public searchGifs(query: string): void {
    this.gifService.fetchGifs(query).subscribe((gifs) => this.gifs = gifs.data);
  }
}
