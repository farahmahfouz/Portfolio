import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { slideUpAnimation } from '../animations';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [
    slideUpAnimation
  ]
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      id: 1,
      name: "Express Generate CLI",
      description: "Powerful CLI tool to quickly generate MVC structure (models, views, controllers) for Node.js Express apps, speeding up development.",
      techStack: [
        "Node.js", "Express.js", "Commander.js"
      ],
      frontendLink: null,
      backendLink: "https://github.com/farahmahfouz/express-generate-cli",
    },
    {
      id: 2,
      name: "System Management Application",
      description: "Full-stack system management app built with Node.js, Express, and MongoDB, featuring AI automation, cron jobs, email integration, and robust business workflows.",
      techStack: [
        "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcryptjs",
        "node-cron", "dayjs", "nodemailer", "openrouter", "googleapis", "sendgrid"
      ],
      frontendLink: "https://system-management-frontend.vercel.app",
      backendLink: "https://github.com/farahmahfouz/order-management-system"
    },

    {
      id: 3,
      name: "X Social Media Platform",
      description: "Full-stack social media platform with Express backend and React frontend, handling authentication, posts, likes, image uploads, and responsive UI.",
      techStack: [
        "Express.js", "JWT", "Passport.js", "MongoDB", "Joi", "Multer",
        "React 18", "React Router DOM v6", "Axios", "TailwindCSS", "DaisyUI", "Vite"
      ],
      frontendLink: "https://x-frontend.vercel.app",
      backendLink: "https://github.com/farahmahfouz/Clone-X"
    },

    {
      id: 4,
      name: "Sammly - T-Shirt Design Platform",
      description: "Full-stack T-shirt design platform with React frontend and Node.js Express backend supporting user authentication, product management, and image processing.",
      techStack: [
        "React", "Vite", "Tailwind CSS", "DaisyUI", "Fabric.js", "Axios",
        "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt", "Multer", "Sharp", "Joi"
      ],
      frontendLink: "https://sammly.vercel.app",
      backendLink: "https://github.com/Node-React-Designer-Ecommerce/Node-Designer-E-commerce"
    },

    {
      id: 5,
      name: "Natours - Tours Booking Website",
      description: "A full-featured tours booking platform built with Node.js, Express, and MongoDB, featuring user authentication, tour booking, secure Stripe payments, and advanced querying.",
      techStack: [
        "Node.js", "Express", "MongoDB", "Mongoose", "Pug", "Stripe API"
      ],
      frontendLink: "https://natours-frontend.vercel.app",
      backendLink: "https://github.com/farahmahfouz/Booking-App"
    },
    {
      id: 6,
      name: "Vite Chat App",
      description: `A real-time chat application built with a modern React frontend using Vite and a robust Express.js backend with MongoDB.`,
      techStack: [
        "React 18", "Vite", "Tailwind CSS", "Radix UI", "Socket.io", "Express.js", "MongoDB", "Mongoose", "JWT"
      ],
      frontendLink: "https://your-vite-chat-frontend.vercel.app",
      backendLink: "https://github.com/farahmahfouz/React-chat-app"
    }

  ]

  animationState = 'hidden';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animationState = 'visible';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }

  openLink(url: string | null) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
