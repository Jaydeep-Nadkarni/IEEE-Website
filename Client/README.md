# IEEE Student Branch Website

A clean, minimal, and professional website UI for IEEE Student Branch built with React.js, Vite, and Tailwind CSS.

## 🎨 Design Features

- **Modern Minimal Design**: Clean white layout with professional academic styling
- **Professional Color Palette**:
  - Primary: `#00629B` (IEEE Blue)
  - Secondary: `#0F172A` (Dark Navy)
  - Accent: `#3B82F6` (Bright Blue)
  - Background: `#FFFFFF` (White)

- **Typography**: Poppins font from Google Fonts
- **Fully Responsive**: Mobile, Tablet, and Desktop optimized
- **Smooth Animations**: Subtle hover effects and fade-in animations

## 📁 Project Structure

```
Client/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky navigation with mobile menu
│   │   ├── Footer.jsx             # Footer with links and social icons
│   │   ├── SectionHeader.jsx      # Reusable section header component
│   │   └── MemberCard.jsx         # Member profile card component
│   │
│   ├── pages/
│   │   ├── Home.jsx               # Landing page with hero section
│   │   ├── About.jsx              # About IEEE and branch info
│   │   ├── Members.jsx            # Team members grid with filtering
│   │   ├── Events.jsx             # Upcoming events showcase
│   │   └── Contact.jsx            # Contact form and information
│   │
│   ├── App.jsx                    # Main app with routing
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global Tailwind styles
│
├── index.html                     # HTML entry point
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
├── vite.config.js                 # Vite configuration
└── package.json                   # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the Client folder:
```bash
cd Client
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

### Build for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📄 Pages Overview

### 🏠 Home Page
- Hero section with CTA
- About preview
- Featured events (3-card grid)
- Core team preview (4 members)
- Footer

### 📖 About Page
- Comprehensive IEEE information
- Mission and Vision statements
- Core values (4 pillars)
- Student branch overview

### 👥 Members Page
- Full team directory
- Filter by category (Leadership, Technical, Events, Communications)
- Responsive grid (4 columns desktop → 2 tablet → 1 mobile)
- Member cards with social links

### 📅 Events Page
- Event cards with details
- Expandable event information
- Registration buttons
- Event categories showcase
- Newsletter subscription

### 📧 Contact Page
- Contact information (Email, Phone, Location)
- Contact form with validation
- Office hours
- FAQ section
- Social media links

## 🎯 Component Highlights

### Navbar
- Responsive sticky navigation
- Mobile hamburger menu
- Smooth hover animations
- Active link underline effect

### Footer
- Organized layout (3 columns)
- Quick links
- Contact information
- Social media icons
- Copyright information

### MemberCard
- Profile image placeholder with avatar initials
- Name and position
- LinkedIn link
- Subtle hover scale animation

### SectionHeader
- Reusable section title component
- Optional subtitle
- Centered or left-aligned options

## 🎨 Tailwind CSS Customization

The project includes custom Tailwind utilities:

```css
.smooth-transition  /* All smooth transitions */
.card-hover        /* Card hover effects (shadow & scale) */
.animate-fadeIn    /* Fade-in animation */
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1280px
- **Large**: > 1280px

## 🎭 Key Features

✅ **Sticky Navigation** with mobile responsive menu
✅ **Hero Section** with gradient background
✅ **Event Cards** with expandable details
✅ **Member Directory** with category filtering
✅ **Contact Form** with validation (demo mode)
✅ **Smooth Animations** and transitions
✅ **Professional Layout** with proper spacing
✅ **Social Media Integration** (placeholder links)
✅ **SEO Ready** with proper meta tags
✅ **Performance Optimized** with Vite

## 🛠 Technologies Used

- **React 18.3.1**: UI library
- **Vite 5.4.2**: Build tool
- **Tailwind CSS 3.4.9**: Utility-first CSS framework
- **React Router DOM 6.26.0**: Client-side routing
- **React Icons 5.3.0**: Icon library
- **PostCSS 8.4.41**: CSS transformation
- **Autoprefixer 10.4.20**: CSS vendor prefixing

## 📝 Customization Guide

### Change Color Palette
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#00629B',      // Change primary color
      secondary: '#0F172A',    // Change secondary color
      accent: '#3B82F6',       // Change accent color
    },
  },
}
```

### Add More Team Members
Update the members array in `src/pages/Members.jsx`

### Update Event Details
Modify the events array in `src/pages/Events.jsx`

### Change Content
All content is directly in components - no CMS required for quick edits

## 🔒 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

All dependencies are lightweight and production-ready:

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.0",
  "react-icons": "^5.3.0"
}
```

## ✨ Future Enhancements

- Backend integration for form submissions
- Blog section
- Photo gallery
- Event registration system
- Member portal login
- Dark mode toggle
- Multi-language support

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For questions or issues, please contact: ieee@branch.edu

---

Built with ❤️ by IEEE Student Branch
