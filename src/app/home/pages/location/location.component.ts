import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Charactere, Location } from 'src/app/interfaces/responseApi';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {

  loading: boolean = true
  location: Location | undefined = undefined
  characters: string[] = []
  residentsNumber: number = 0

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.pipe(
      switchMap(({ id }) => this.apiService.getLocation(id))
    ).subscribe((res) => {
      this.location = res
      const { residents } = res
      this.residentsNumber = residents.length
      this.getCharacters(residents)
    })
  }

  getCharacters(value: string[]) {
    let contador = 0
    value.forEach((item, i) => {
      const valueSplit = item.split("/")
      const id = valueSplit[valueSplit.length - 1]
      this.apiService.getCharacter(id).subscribe((res) => {
        this.characters[contador] = res.name
        contador += 1
      }, (err) => {
        console.log(err)
      })
      if (i === value.length - 1) this.loading = false
    })
  }

}
