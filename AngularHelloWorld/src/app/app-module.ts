import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MyFirstComponent } from './my-first-component/my-first-component';
import { AboutMe } from './about-me/about-me';
import { Counter } from './counter/counter';

@NgModule({
  declarations: [App, MyFirstComponent, AboutMe, Counter],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
