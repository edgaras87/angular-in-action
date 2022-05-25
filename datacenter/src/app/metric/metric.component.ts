import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnChanges {

  @Input('used') value: number = 0;
  @Input('available') max: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] && isNaN(changes['value'].currentValue)) this.value = 0;
    if (changes['max'] && isNaN(changes['max'].currentValue)) this.value = 0;
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }

}
