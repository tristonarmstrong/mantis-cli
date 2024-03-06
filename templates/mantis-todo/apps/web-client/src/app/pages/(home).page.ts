import { Component } from '@angular/core';
import { TodoListComponent } from '../components/todo-list/todo-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoListComponent],
  template: `
    <main class="flex text-gray-600 bg-gray-100 min-h-screen p-5">
      <app-list />
    </main>
  `,
})
export default class HomeComponent {}
