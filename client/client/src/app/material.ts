import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatSliderModule,
        MatProgressBarModule,
        MatChipsModule,
        MatIconModule,
        MatPaginatorModule,
        MatMenuModule,
        MatTabsModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatSliderModule,
        MatProgressBarModule,
        MatChipsModule,
        MatIconModule,
        MatPaginatorModule,
        MatMenuModule,
        MatTabsModule
    ],
})

export class MaterialModule { }
