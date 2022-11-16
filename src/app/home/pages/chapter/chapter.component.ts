import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Episode } from 'src/app/interfaces/responseApi';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html'
})
export class ChapterComponent implements OnInit {

  episode: Episode | undefined = undefined
  loading: boolean = true
  characters: string[] = []

  constructor(private activeRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.activeRoute.params.pipe(
      switchMap(({ id }) => this.apiService.getEpisode(id))
    ).subscribe((res) => {
      this.episode = res
      const { characters } = res
      this.getCharacters(characters)
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
