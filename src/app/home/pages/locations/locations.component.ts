import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/interfaces/responseApi';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html'
})
export class LocationsComponent implements OnInit {

  locations: Location[] = []
  loading: boolean = true
  favorite: boolean = false
  pages: number[] = []
  page: number = 1
  showPages: number[] = []
  prev: boolean = false
  pagePrev = 0
  totalePages = 0

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLocations(1).subscribe((res) => {
      this.locations = res.results
      this.getPagination(res.info.pages)
      this.totalePages = res.info.pages
    })
  }

  getPagination(pages: number) {
    const newData = []
    for (let index = 0; index < pages; index++) {
      newData[index] = index + 1;
    }
    this.pages = newData
    this.showPages = newData.splice(0, 10)
    this.loading = false
  }

  getMoreLocations(next: number, prev?: boolean) {
    let page = prev ? next - 1 : next
    if (page === -1) return
    this.loading = true
    this.apiService.getLocations(page).subscribe((res) => this.locations = res.results)
    const [first, ...res] = this.showPages
    next === this.page ? this.pagePrev = next - 1 : this.pagePrev = first
    this.page = page
    this.prev = page !== 1 ? true : false
    this.loading = false
  }

}
