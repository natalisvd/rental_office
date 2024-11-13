import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MapService } from './services/map.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rental-office';
  map: any;

  constructor(private mapService: MapService) {}

  getMapInfoPOST() {
    this.mapService.getMapInfoPOST(1)
    .subscribe(res => {
      if(res.isSuccess) {
        this.map = res.data;
      }
    })
  }
  getMapInfo() {
    this.mapService.getMapInfo(1)
    .subscribe(res => {
      if(res.isSuccess) {
        this.map = res.data;
      }
    })
  }
}
