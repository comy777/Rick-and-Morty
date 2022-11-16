import { Component, OnInit } from '@angular/core';
import { Charactere } from 'src/app/interfaces/responseApi';
import { getFavorites } from 'src/app/utils/storage';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent implements OnInit {

  data: Charactere[] = []

  constructor() { }

  ngOnInit(): void {
    this.getDatastorage()
  }

  getDatastorage() {
    const favorites = getFavorites()
    this.data = favorites
  }
}
