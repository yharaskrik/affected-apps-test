import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLibComponent } from './test-lib/test-lib.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    TestLibComponent
  ],
  declarations: [TestLibComponent]
})
export class TestLibModule {}
