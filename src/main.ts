import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
const redirect = sessionStorage.getItem('redirect');
if (redirect) {
  sessionStorage.removeItem('redirect');
  history.replaceState(null, '', redirect.replace(location.origin, ''));
}
platformBrowser().bootstrapModule(AppModule, {
  
})
  .catch(err => console.error(err));
