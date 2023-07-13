import { TestBed } from '@angular/core/testing';
import { SharedUiComponent } from './shared-ui.component';

describe(SharedUiComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(SharedUiComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(SharedUiComponent);
  });
});
