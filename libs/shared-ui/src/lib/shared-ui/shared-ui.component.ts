import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-shared-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-ui.component.html',
  styleUrls: ['./shared-ui.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiComponent {}
