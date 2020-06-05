import { AfterContentInit, Component } from '@angular/core';
import { GifService } from './gif.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  public colors: string[] = ['primary', 'accent', 'warn'];
  public gifs: any[];
  public query: string;

  constructor(private gifService: GifService) { }

  ngAfterContentInit() {
  }

  public searchGifs(query: string): void {
    this.gifService.fetchGifs(query).subscribe((gifs: any) => {
      this.gifs = gifs.data;
      this.gifs.forEach(element => {
        console.log(element);
      });
    });
  }

  public generateRandomColor(seed: number): string {
    const index = Math.ceil(Math.random() * seed);
    return this.colors[index];
  }
}
