import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookitfive';

  pageDisplayed = "bookshelf"

onNavigatePage(page: string) {
    // console.log("APP COMP:", page)
    this.pageDisplayed = page;
}
}
