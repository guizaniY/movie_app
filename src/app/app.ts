import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBar } from './head-bar/head-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadBar],
  templateUrl: './app.html',
})
export class App {}
