import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate-management',
  templateUrl: './certificate-management.component.html',
  styleUrls: ['./certificate-management.component.css']
})
export class CertificateManagementComponent {

  // Trigger file input click when the "Upload Certificate" button is clicked
  triggerFileUpload() {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }

  // Handle file selection
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const selectedFile = input.files[0];
      console.log('Selected file:', selectedFile.name);  // Do something with the selected file
    }
  }
}
