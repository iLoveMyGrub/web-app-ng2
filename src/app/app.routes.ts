import { Routes } from '@angular/router';

import { EventsRoutes } from './events/events.routes';
import { ArticlesRoutes } from './articles/articles.routes';
import { HomeRoutes } from './home/home.routes';

export const routes: Routes = [
    ...EventsRoutes,
    ...ArticlesRoutes,
    ...HomeRoutes
];