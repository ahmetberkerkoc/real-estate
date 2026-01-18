# Tulum Realty

A modern, responsive real estate website built with vanilla HTML, CSS, and JavaScript. Browse properties, explore listings, connect with agents, and schedule tours. Featuring multilingual support (English, Turkish, German, French) and intelligent location discovery.

## Features

- **Home Page**: Hero section with call-to-action buttons and key statistics
- **Listings Page**: Searchable property database with filtering by city, property type, and price range
- **Agents Page**: Meet the team of real estate professionals
- **Contact Page**: Get in touch with agents or book a tour
- **Listing Detail Page**: Full property information with photos, features, location map, and nearby amenities
- **Responsive Design**: Mobile-friendly layout with hamburger menu for smaller screens
- **Multi-Language Support**: Full i18n with English, Turkish, German, and French
- **Nearby Places**: Integration with OpenStreetMap and Overpass API to show hospitals, universities, and airports near properties
- **Interactive UI**: Toast notifications, smooth navigation, and dynamic filtering
- **Local Storage**: Persistent language preference and cached nearby location data

## Project Structure

```
real-estate/
├── index.html          # Home page
├── listings.html       # Property listings page
├── agents.html         # Agents page
├── contact.html        # Contact page
├── listing.html        # Individual listing detail page
├── README.md           # Documentation
└── assets/
    ├── app.js          # Core functionality:
    │                  #   - i18n engine (EN, TR, DE, FR)
    │                  #   - Navigation & mobile menu
    │                  #   - Listing filters & detail views
    │                  #   - Contact form with validation
    │                  #   - Toast notifications
    │                  #   - OpenStreetMap integration
    │                  #   - Overpass API for nearby places
    ├── constants.js    # Configuration constants
    └── style.css       # Global styles & components
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
- Specialization tags

### Listing Detail (listing.html)
Full property information including:
- Complete specifications (beds, baths, size, price)
- Detailed description and amenities
- OpenStreetMap embed showing exact location
- Nearby places discovery via Overpass API:
  - Hospitals, universities, airports
  - Distance and estimated travel time
  - Smart caching to minimize API calls

### Contact (contact.html)
Get in touch with:
- Contact form with validation
- Intent selection (Buying, Renting, Investing, Commercial)
- Tour booking options
- Toast confirmation messages

## Technologies

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, flexbox, grid, and gradients
- **Vanilla JavaScript**: No dependencies
  - i18n engine with dynamic translation
  - OpenStreetMap integration via iframe embeds
  - Overpass API for place discovery
  - localStorage for preferences and caching
- **APIs Used**:
  - OpenStreetMap (map embeds)
  - Overpass API (POI discovery)

## Features Breakdown

### Multi-Language Support (i18n)
- Full support for 4 languages:
  - English (EN)
  - Turkish (TR)
  - German (DE)
  - French (FR)
- Language switcher in header
- Persistent preference using localStorage
- Supports:
  - Element text (data-i18n)
  - Form placeholders (data-i18n-placeholder)
  - Tooltips/titles (data-i18n-title)
- Template variables for dynamic content (e.g., user names, years)

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

### Nearby Places Discovery
- Queries Overpass API for:
  - Hospitals
  - Universities
  - Airports
- Calculates distances using Haversine formula
- Estimates travel time based on property type
- Results sorted by proximity (up to 5 per category)
- Smart caching system:
  - Stores results in localStorage
  - Prevents duplicate API calls
  - Graceful error handling with user feedback

### Responsive Layout
- Flexbox-based layouts
- CSS Grid for component organization
- Mobile-first design approach
- Breakpoints for different screen sizes

### Toast Notifications
- Non-intrusive success/error messages
- Auto-dismissing after 3.5 seconds
- Manual close option
- Multilingual support

### Maps Integration
- OpenStreetMap embeds for property locations
- Interactive map with property marker
- Responsive iframe sizing

## Color Scheme

- **Primary**: #3b82f6 (Blue)
- **Secondary**: #22c55e (Green)
- **Accent**: #f59e0b (Amber)
- **Background**: #f6f8ff (Light Blue)
- **Text**: #0c1a33 (Dark Blue)

## Getting Started

1. Clone or download the project
2. Open `index.html` in a web browser
3. Select your preferred language using the language selector
4. Navigate through the pages using the menu
5. Use filters on the Listings page to explore properties
6. Click on any listing to view full details and nearby amenities

## Usage

### Language Selection
- Click the language selector (EN/TR/DE/FR) in the header
- Your choice is saved automatically via localStorage
- All content updates instantly

### Viewing Property Details
1. Go to Listings page
2. Click "Details" on any property card
3. View full information including:
   - Photo gallery
   - Specifications and amenities
   - Location on interactive map
   - Nearby hospitals, universities, and airports

### Mobile Menu
Click the hamburger menu (☰) on mobile devices to open/close navigation.

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## Notes

- All property data is currently embedded in the HTML (no backend database)
- Responsive design optimized for mobile, tablet, and desktop
- Light theme with gradient backgrounds for a modern aesthetic
- Accessible markup with ARIA attributes for screen readers
- Nearby places data is cached to reduce API calls and improve performance
- Contact form is demo-only (requires backend to send emails)
- OpenStreetMap and Overpass API are free, public services
- Developed as a modern, vanilla JavaScript example with no npm dependencies

---

Built with ❤️ • Multilingual • Fully Responsive • No Dependencies  
Last updated: January 18, 2026
