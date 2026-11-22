import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { WishlistStore } from '../wishlist-store';

@Component({
  selector: 'app-wishlist',
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './wishlist.html',
})
export class Wishlist {
  store = inject(WishlistStore);
  imageUrl = environment.imageUrl;
}