import { Component, inject, resource, signal } from '@angular/core';
import { Contact } from '../../model/contact';
import { MatListModule } from '@angular/material/list';
import { ApiService } from '../../services/api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-contacts-list',
  imports: [
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss',
})
export class ContactsListComponent {
  apiService = inject(ApiService);
  contactsResource = resource({
    loader: () => this.apiService.getContacts(),
  });

  async deleteContact(id: string) {
    await this.apiService.deleteContact(id);
    this.contactsResource.reload();
  }
}
