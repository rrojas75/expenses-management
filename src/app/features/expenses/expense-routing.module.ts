import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseDetailComponent } from './components/expense-detail/expense-detail.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';

export const expensesRoutes: Routes = [
  { path: 'list', component: ExpenseListComponent },
  { path: 'detail', component: ExpenseDetailComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(expensesRoutes)],
  exports: [RouterModule],
})
export class ExpensesRoutingModule {}
