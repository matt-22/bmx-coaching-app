import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatToolbarModule, MatAnchor, RouterLink],
  selector: 'app-nav',
  styleUrl: './nav.scss',
  templateUrl: './nav.html',
})
export class Nav {}
