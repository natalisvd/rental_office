import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MapService } from './services/map.service';
import { Map } from './models/map';
import { StandardResponse } from './models/standard-response';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rental-office';
  map: Map | null = null;

  constructor(private mapService: MapService) {}

  getMapInfo() {
    this.mapService.getMapInfo(1)
    .subscribe((res: StandardResponse<Map | null>) => {
      if(res.isSuccess) {
        this.map = res.data;
      }
    })
  }
  getMapInfoPOST() {
    this.mapService.getMapInfoPOST(1)
    .subscribe((res: StandardResponse<Map | null>) => {
      if(res.isSuccess) {
        this.map = res.data;
      }
    })
  }
}
