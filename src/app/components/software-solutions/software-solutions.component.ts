import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-software-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './software-solutions.component.html',
  styleUrl: './software-solutions.component.css'
})
export class SoftwareSolutionsComponent {
  solutions = [
    {
      title: 'Project Management System (Mastermind)',
      description: 'A general-purpose project management software solution designed for teams across various industries. It enables efficient planning, execution, and tracking of projects with real-time collaboration.',
      features: [
        'User Management: Roles (Admin, Member, Viewer) & Profiles',
        'Project Views: List, Kanban Board, & Calendar',
        'Task Management: Subtasks, Priorities, Attachments & Activity Logs',
        'Collaboration: Real-time Comments, @Mentions & Notifications',
        'Dashboard: Personal Task Views, Progress Analytics & Activity Feed'
      ],
      videoUrl: 'assets/videos/project-management.mp4'
    }
  ];
}
