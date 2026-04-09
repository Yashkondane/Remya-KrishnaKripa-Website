# Rise with Remya

**Rise with Remya** is a premium personal brand website for **Remya Krishnakripa**, an Akashic Reader, Energy Healer, and Mid-Career Accelerator Coach. The platform is designed to tell a powerful personal story while offering high-end holistic services.

## ✨ Key Features

- **Premium Aesthetic Design**: Modern UI with glassmorphism, background blurs, and sophisticated color palettes (Beige & Elegant Blue).
- **Responsive Hero Section**: Dynamic landing page with social media integration and clear CTAs.
- **Narrative-Driven About Page**: A detailed journey from corporate leadership to soul-aligned mission, featuring accomplishments and published work.
- **Integrated Services**: Specialized pages for Akashic Records, Career Acceleration, Inner Child Healing, etc.
- **Interactive Elements**:
  - **Floating Social Sidebar**: Quick access to Instagram, LinkedIn, Facebook, and YouTube.
  - **WhatsApp Floating Button**: Direct communication channel for potential clients.
  - **Scroll Reveal Animations**: Smooth transitions as the user explores the content.
- **Video Testimonials**: A dedicated showcase for client success stories.
- **Preloader**: Custom branded preloader for a polished landing experience.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Custom Tailwind animations & `ScrollReveal` components
- **Font**: [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) (Google Fonts)

## 📁 Project Structure

```text
app/
├── (routes)/
│   ├── about/             # Redesigned narrative About page
│   ├── contact/           # Contact form and info
│   ├── services/          # Overview of all services
│   └── ...                # Specific service pages
├── layout.tsx             # Root layout with Sidebar and WhatsApp integration
└── globals.css            # Custom design tokens and animations
components/
├── ui/                    # Shadcn/ui core components
├── social-sidebar.tsx     # Custom floating social menu
├── whatsapp-button.tsx    # Floating WhatsApp contact
└── ...                    # Reusable UI elements
public/
└── images/                # Brand assets and professional photography
```

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 License

All content and design rights belong to **Remya Krishnakripa**.
