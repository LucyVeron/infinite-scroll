import { Component } from '@angular/core';
import { GifService } from './gif.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public totalGifs: any[];
  public displayedGifs: any[];
  public query: string;
  public loadAmount = 20;

  constructor(private gifService: GifService) { }

  public searchGifs(query: string): void {
    this.gifService.fetchGifs(query).subscribe((gifs) => {
      this.loadAmount = 20;
      this.totalGifs = gifs.data;
      this.displayedGifs = gifs.data.slice(0, this.loadAmount);
    });
  }

  public onScroll(): void {
    if (this.displayedGifs.length !== this.totalGifs.length) {
      this.loadAmount += 20;
      this.displayedGifs = this.totalGifs.slice(0, this.loadAmount);
    }
  }
}
