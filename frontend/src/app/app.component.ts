import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ApiService } from 'services/api.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'frontend';

  constructor(
		private apiService: ApiService
	) {}
}
