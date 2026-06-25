# 🦷 SmileLine Dental Clinic

A fully responsive, modern dental clinic website built with React, TypeScript, and Tailwind CSS. Designed for a real-world clinic in Calicut, Kerala — featuring appointment booking via WhatsApp, service pages, doctor profiles, gallery, and emergency contact support.

---

## 📸 Preview

> *Add a screenshot or screen recording of the live site here*

---

## ✨ Features

- 🏠 **Multi-page layout** — Home, About, Services, Gallery, Locations, Contact
- 📅 **Appointment Booking** — WhatsApp-integrated form that sends patient details directly to the clinic
- 💬 **WhatsApp Button** — Floating chat button with pre-filled message on every page
- 🚨 **Emergency CTA** — Dedicated emergency section with direct call and WhatsApp links
- 🖼️ **Gallery** — Clinic interior, equipment, and transformation showcases
- 👨‍⚕️ **Doctor Profiles** — Meet the team slider with specialty and credentials
- ⭐ **Testimonials** — Patient reviews section
- 📍 **Locations** — Embedded Google Maps with address, hours, and directions
- 📱 **Fully Responsive** — Mobile-first design, works on all screen sizes
- 🎞️ **Smooth Animations** — Page transitions and scroll animations via Framer Motion

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Vite 6](https://vitejs.dev/) | Fast build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://motion.dev/) | Animations |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [Lucide React](https://lucide.dev/) | Icon library |

---

## 📁 Project Structure

```
smileline-dental-clinic/
├── src/
│   ├── components/
│   │   ├── AppointmentForm.tsx   # WhatsApp-integrated booking form
│   │   ├── Footer.tsx            # Site footer with links & social icons
│   │   ├── Navbar.tsx            # Responsive navigation bar
│   │   ├── WhatsAppButton.tsx    # Floating WhatsApp chat button
│   │   └── WhatsAppIcon.tsx      # Custom WhatsApp SVG icon
│   ├── pages/
│   │   ├── Home.tsx              # Landing page
│   │   ├── About.tsx             # Clinic story & doctor profiles
│   │   ├── Services.tsx          # All dental services
│   │   ├── Gallery.tsx           # Photo gallery
│   │   ├── Locations.tsx         # Map, address & hours
│   │   └── Contact.tsx           # Contact info & appointment form
│   ├── constants.ts              # Doctors, services, testimonials data
│   ├── types.ts                  # TypeScript type definitions
│   ├── Layout.tsx                # Shared layout wrapper
│   └── main.tsx                  # App entry point
├── index.html
├── vite.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/smileline-dental-clinic.git

# Navigate into the project
cd smileline-dental-clinic

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## 📋 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | TypeScript type checking |

---

## 🏥 Services

- Teeth Whitening
- Dental Implants
- Orthodontics (Braces & Invisalign)
- Root Canal Treatment
- Cosmetic Dentistry
- Pediatric Dentistry

---

## 📬 Contact

| Channel | Details |
|---|---|
| 📞 Phone | [+91 7777700000](tel:+917777700000) |
| 💬 WhatsApp | [Chat Now](https://wa.me/917777700000) |
| 📧 Email | prsunani674@gmail.com |
| 📍 Location | Mavoor Road, Calicut, Kerala 673001 |
| 📸 Instagram | [@priyaranjans_](https://www.instagram.com/priyaranjans_/) |

---

## 📄 License

This project is for personal/client use. All rights reserved.
