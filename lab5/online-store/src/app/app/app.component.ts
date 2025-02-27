import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Import components
import { HeaderComponent } from '../components/header/header.component';
import { ProductsListComponent } from "../pages/products-list/products-list.component";

// Import data
import categoriesList from '../../../categories.json';
import { Category } from '../pages/products-list/products.models';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        HeaderComponent,
        ProductsListComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title(title: any) {
      throw new Error('Method not implemented.');
    }
    categories = signal<Category[]>(categoriesList);
    selectedCategory = signal<string | null>(null);

    setCategory(categoryId: string) {
        this.selectedCategory.set(categoryId);
    }
}