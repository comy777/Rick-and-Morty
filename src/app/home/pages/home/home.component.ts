import { Component, OnInit } from '@angular/core';
import { Charactere } from 'src/app/interfaces/responseApi';
import { ApiService } from 'src/app/services/api.service';
import { getFavorites } from 'src/app/utils/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters: Charactere[] = []
  loading: boolean = true
  favorite: boolean = false
  pages: number[] = []
  page: number = 1
  showPages: number[] = []
  prev: boolean = false
  pagePrev = 0

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe((res) => {
      this.characters = res.results
      this.getDataFavorites()
      this.getPagination(res.info.pages)
      this.loading = false
    })
  }

  getDataFavorites() {
    const favorites = getFavorites()
    if (favorites.length > 0) this.favorite = true
  }

  getPagination(pages: number) {
    const newData = []
    for (let index = 0; index < pages; index++) {
      newData[index] = index + 1;
    }
    this.pages = newData
    this.showPages = newData.splice(0, 10)
  }

  getMoreCharacters(next: number, prev?: boolean) {
    let page = prev ? next - 1 : next
    if (page === -1) return
    this.loading = true
    this.apiService.getCharacters(page).subscribe((res) => this.characters = res.results)
    const lastPage = this.showPages[this.showPages.length - 1] + 1
    const [first, ...res] = this.showPages
    if (next === this.page) res.pop()
    next === this.page ? this.showPages = [first - 1, first, ...res] : this.showPages = [...res, lastPage]
    next === this.page ? this.pagePrev = next - 1 : this.pagePrev = first
    this.page = page
    this.prev = page !== 1 ? true : false
    this.loading = false
  }

}
