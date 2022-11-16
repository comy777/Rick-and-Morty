import { Component, Input, OnInit } from '@angular/core';
import { Charactere } from 'src/app/interfaces/responseApi';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data!: Charactere;
  lastEpisode = ''

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const { episode } = this.data
    const lastEpisode = episode[episode.length - 1]
    const valueSplit = lastEpisode.split("/")
    const id = valueSplit[valueSplit.length - 1]
    this.apiService.getEpisode(id).subscribe((res) => this.lastEpisode = res.name)
  }

}
