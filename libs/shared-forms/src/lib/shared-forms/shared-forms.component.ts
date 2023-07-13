import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-shared-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-forms.component.html',
  styleUrls: ['./shared-forms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedFormsComponent {}
