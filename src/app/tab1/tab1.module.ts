import { IonicModule } from '@ionic/angular';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { register } from 'swiper/element/bundle';
register();
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CarouselComponent } from '../Components/carousel/carousel.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, CarouselComponent], 
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab1PageModule {}
