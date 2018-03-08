import { Component, OnInit, Input } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';

class TileSize {
  id: string;
  cols: number;
  rows: number;
  color: string;

  constructor(id: string, cols: number, rows: number) {
    this.id = id;
    this.cols = cols;
    this.rows = rows;
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input()
  public cols = 18;
  @Input()
  public menu: TileSize;
  @Input()
  public side: TileSize;
  @Input()
  public main: TileSize;
  @Input()
  public foot: TileSize;

  constructor(private observableMedia: ObservableMedia) {}

  ngOnInit() {
    const grid = new Map([
      ['xs', 8],
      ['sm', 12],
      ['md', 12],
      ['lg', 18],
      ['xl', 24]
    ]);

    // deffinition of the grid occupation
    // for each tile and each media size.
    const gridOccupation = new Map<string, TileSize[]>([
      ['xs', [
        new TileSize('menu-bar', 8, 1),
        new TileSize('side-nav', 0, 0),
        new TileSize('main-content', 8, 8),
        new TileSize('footer', 0, 0)
      ]],
      ['sm', [
        new TileSize('menu-bar', 12, 1),
        new TileSize('side-nav', 2, 10),
        new TileSize('main-content', 10, 10),
        new TileSize('footer', 0, 0)
      ]],
      ['md', [
        new TileSize('menu-bar', 12, 1),
        new TileSize('side-nav', 2, 10),
        new TileSize('main-content', 10, 8),
        new TileSize('footer', 12, 2)
      ]],
      ['lg', [
        new TileSize('menu-bar', 18, 2),
        new TileSize('side-nav', 3, 12),
        new TileSize('main-content', 15, 10),
        new TileSize('footer', 18, 2)
      ]],
      ['xl', [
        new TileSize('menu-bar', 24, 2),
        new TileSize('side-nav', 4, 10),
        new TileSize('main-content', 20, 10),
        new TileSize('footer', 24, 2)
      ]],

    ]);

    this.observableMedia.subscribe(mediaChange => {
      this.cols = grid.get(mediaChange.mqAlias);
      this.assignTileSizes(mediaChange.mqAlias, gridOccupation);
    });
  }


  assignTileSizes(mediaAlias: string,
                  mapTiles: Map<string, TileSize[]> ): void {
    mapTiles.get(mediaAlias).forEach(tile => {
      switch (tile.id) {
        case 'menu-bar' :
          this.menu = tile;
          break;
        case 'side-nav' :
          this.side = tile;
          break;
        case 'main-content' :
          this.main = tile;
          break;
        case 'footer' :
          this.foot = tile;
          break;
        default:
          console.log(`this tile name is not recognized..., tile considered = ${tile}`);
      }
    });
  }

}
