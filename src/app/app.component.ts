import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MG';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const rainContainer = this.renderer.selectRootElement('#rain-container');

    const createRain = () => {
      const rainDrop = this.renderer.createElement('div');
      this.renderer.addClass(rainDrop, 'raindrop');
      this.renderer.setStyle(rainDrop, 'left', `${Math.random() * 100}vw`);
      this.renderer.setStyle(
        rainDrop,
        'animationDuration',
        `${Math.random() * 2 + 2}s`
      );
      this.renderer.setStyle(rainDrop, 'opacity', `${Math.random()}`);

      this.renderer.appendChild(rainContainer, rainDrop);

      setTimeout(() => {
        this.renderer.removeChild(rainContainer, rainDrop);
      }, 4000);
    };

    setInterval(createRain, 100);
  }
}
