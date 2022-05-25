import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent {

  @Input() node: any;
   
  isDanger(prop: string) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

}