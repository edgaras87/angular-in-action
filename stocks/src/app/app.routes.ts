import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ManageComponent } from "./components/manage/manage.component";

const routes: Routes = [
    {
        // http://localhost:4200
        path: '',
        component: DashboardComponent
    },
    {
        // http://localhost:4200/manage
        path: 'manage',
        component: ManageComponent
    },
];

export const AppRoutes = RouterModule.forRoot(routes);