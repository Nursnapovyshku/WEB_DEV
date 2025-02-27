import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products.models';
import { CurrencyPipe } from '@angular/common';
import { RatingPipe } from './rating.pipe';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [CurrencyPipe, RatingPipe, PrimaryButtonComponent],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
    @Input({required: true}) product!: Product;
    @Output() likeProduct = new EventEmitter<number>();
    @Output() removeProduct = new EventEmitter<number>();

    onLike() {
        this.likeProduct.emit(this.product.id);
    }

    onRemove() {
        this.removeProduct.emit(this.product.id);
    }

    encodeProductURI(uri: string): string {
        return encodeURIComponent(uri);
    }
}