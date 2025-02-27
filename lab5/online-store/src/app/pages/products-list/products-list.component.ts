import { Component, Input, OnChanges, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import productsList from '../../../../products.json';
import { Product } from './products.models';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css'
})


export class ProductsListComponent implements OnChanges {
    @Input() selectedCategory: string | null = null;

    products = signal<Product[]>(productsList);
    filteredProducts = signal<Product[]>([]);

    ngOnChanges(changes: SimpleChanges) {
        if (changes['selectedCategory']) {
            this.updateFilteredProducts();
        }
    }
    

    private updateFilteredProducts() {
        if (this.selectedCategory) {
            this.filteredProducts.set(
                this.products().filter(product => product.category === this.selectedCategory)
            );
        } else {
            this.filteredProducts.set([]);
        }
    }

    handleLike(productId: number) {
        this.products.update(products =>
            products.map(product =>
                product.id === productId
                    ? { ...product, likes: (product.likes || 0) + 1 }
                    : product
            )
        );
        this.updateFilteredProducts();
    }

    handleRemove(productId: number) {
        this.products.update(products =>
            products.filter(product => product.id !== productId)
        );
        this.updateFilteredProducts();
    }
}