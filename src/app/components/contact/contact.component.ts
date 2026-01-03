import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async submitForm() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      try {
        // TODO: Replace these with your actual EmailJS keys
        // Get them from https://dashboard.emailjs.com/
        const serviceId = 'service_h64otdm';
        const templateId = 'template_bylr9z7';
        const publicKey = '9KMtqrBaEObspWnTu';

        const templateParams = {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          to_email: 'beto2studio@gmail.com', // Send to the business owner
          reply_to: this.contactForm.value.email, // Allow replying to the visitor
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message
        };
        console.log(templateParams);
        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        alert('Thank you! Your message has been sent successfully.');
        this.contactForm.reset();
      } catch (error) {
        console.error('Failed to send email:', error);
        alert('Oops! Something went wrong. Please try again later or email us directly.');
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
