import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExpenseListComponent } from "./expense-list/expense-list.component";
import { ExpenseDetailComponent } from "./expense-detail/expense-detail.component";

export const expensesRoutes: Routes = [
    { path: 'list', component: ExpenseListComponent },
    { path: 'detail', component: ExpenseDetailComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forChild(expensesRoutes)],
    exports: [RouterModule],
})
export class ExpensesRoutingModule { }