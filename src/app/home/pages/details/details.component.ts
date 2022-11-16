import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Charactere } from 'src/app/interfaces/responseApi';
import { ApiService } from 'src/app/services/api.service';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { getFavorites, saveFavorite, validateCharacter } from 'src/app/utils/storage';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  loading: boolean = true
  character: Charactere | undefined = undefined
  arrowUp = faArrowUp
  arrowDown = faArrowDown
  show: boolean = false
  favorite: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private _router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.apiService.getCharacter(id))
    ).subscribe((res) => {
      this.character = res
      this.setFavorite(true)
      this.loading = false
    })
  }

  setShowChapters() {
    this.show = !this.show
  }

  getNumber(value: string): string {
    const valueSplit = value.split("/")
    return valueSplit[valueSplit.length - 1]
  }

  changeEpisode(value: string, route: string) {
    const episode = this.getNumber(value)
    this._router.navigateByUrl(`${route}${episode}`)
  }

  setFavorite(validate: Boolean) {
    if (!this.character) return
    const favorites = getFavorites()
    const { newData, bandera } = validateCharacter(favorites, this.character, validate)
    saveFavorite(newData)
    if (!validate) this.favorite = !bandera
    if (validate) this.favorite = bandera
    return bandera
  }
}
