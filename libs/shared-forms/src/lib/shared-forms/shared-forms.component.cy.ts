import { TestBed } from '@angular/core/testing';
import { SharedFormsComponent } from './shared-forms.component';

describe(SharedFormsComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(SharedFormsComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(SharedFormsComponent);
  });
});
