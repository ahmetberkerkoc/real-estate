# Tulum Realty

A modern, responsive real estate website built with vanilla HTML, CSS, and JavaScript. Browse properties, explore listings, connect with agents, and schedule tours.

## Features

- **Home Page**: Hero section with call-to-action buttons and key statistics
- **Listings Page**: Searchable property database with filtering by city, property type, and price range
- **Agents Page**: Meet the team of real estate professionals
- **Contact Page**: Get in touch with agents or book a tour
- **Responsive Design**: Mobile-friendly layout with hamburger menu for smaller screens
- **Interactive UI**: Toast notifications, smooth navigation, and dynamic filtering

## Project Structure

```
real-estate/
├── index.html          # Home page
├── listings.html       # Property listings page
├── agents.html         # Agents page
├── contact.html        # Contact page
├── listing.html        # Individual listing detail page
├── assets/
│   ├── app.js         # JavaScript functionality (navigation, filters, modals)
│   └── style.css      # Global styles (design system, components, layout)
└── README.md          # This file
```

## Pages

### Home (index.html)
Landing page with:
- Navigation menu with links to all sections
- Hero section promoting the service
- Key stats: 240+ listings, 24h avg response, 4.9/5 rating

### Listings (listings.html)
Browse all available properties with:
- Filter by city, property type, and price range
- Dynamic listing grid that updates based on filters
- Property cards displaying key details

### Agents (agents.html)
Meet the team with:
- Team member profiles
- Contact information
- Professional details

### Contact (contact.html)
Get in touch with:
- Contact form
- Agent information
- Tour booking options

## Technologies

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, flexbox, grid, and gradients
- **JavaScript**: Vanilla JS (no dependencies) for interactive features

## Features Breakdown

### Navigation
- Sticky header with logo branding
- Responsive navigation menu
- Mobile hamburger menu that toggles
- Active page highlighting

### Filtering System
- Filter properties by:
  - City/location
  - Property type (e.g., house, condo, apartment)
  - Price range (minimum and maximum)
- Real-time results update
- Result count display

### Toast Notifications
- Non-intrusive success/error messages
- Auto-dismissing after 3.5 seconds
- Manual close option

### Responsive Layout
- Flexbox-based layouts
- CSS Grid for component organization
- Mobile-first design approach
- Breakpoints for different screen sizes

## Color Scheme

- **Primary**: #3b82f6 (Blue)
- **Secondary**: #22c55e (Green)
- **Accent**: #f59e0b (Amber)
- **Background**: #f6f8ff (Light Blue)
- **Text**: #0c1a33 (Dark Blue)

## Getting Started

1. Clone or download the project
2. Open `index.html` in a web browser
3. Navigate through the pages using the menu
4. Use filters on the listings page to explore properties

## Usage

### Mobile Menu
Click the hamburger menu (☰) on mobile devices to open/close navigation.

### Filtering Listings
1. Go to the Listings page
2. Enter filter criteria (city, type, price)
3. Click "Apply Filters" to update results

### Booking a Tour
Click "Book a Tour" button in the header or on listing cards to navigate to the contact page.

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## Notes

- All data is currently embedded in the HTML (no backend database)
- Responsive design optimized for mobile, tablet, and desktop
- Light theme with gradient backgrounds for a modern aesthetic
- Accessible markup with ARIA attributes for screen readers

---

Built with ❤️ • Last updated: January 18, 2026
