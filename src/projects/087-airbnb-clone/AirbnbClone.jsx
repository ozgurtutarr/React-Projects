import { useState } from 'react';
import './AirbnbClone.css';

const MOCK_LISTINGS = [
  {
    id: 1,
    title: 'Luxury Villa in Bali',
    type: 'Villa',
    price: 250,
    rating: 4.9,
    location: 'Bali, Indonesia',
    img: 'https://via.placeholder.com/300x200?text=Bali+Villa',
  },
  {
    id: 2,
    title: 'Cozy Cabin in Alps',
    type: 'Cabin',
    price: 120,
    rating: 4.8,
    location: 'Swiss Alps',
    img: 'https://via.placeholder.com/300x200?text=Alps+Cabin',
  },
  {
    id: 3,
    title: 'Modern Apt in NYC',
    type: 'Apartment',
    price: 180,
    rating: 4.6,
    location: 'New York, USA',
    img: 'https://via.placeholder.com/300x200?text=NYC+Apt',
  },
  {
    id: 4,
    title: 'Beach House Malibu',
    type: 'House',
    price: 400,
    rating: 5.0,
    location: 'Malibu, CA',
    img: 'https://via.placeholder.com/300x200?text=Malibu+Beach',
  },
  {
    id: 5,
    title: 'Kyoto Traditional Ryokan',
    type: 'Ryokan',
    price: 200,
    rating: 4.9,
    location: 'Kyoto, Japan',
    img: 'https://via.placeholder.com/300x200?text=Kyoto+Ryokan',
  },
  {
    id: 6,
    title: 'Treehouse in Forest',
    type: 'Treehouse',
    price: 150,
    rating: 4.7,
    location: 'Portland, OR',
    img: 'https://via.placeholder.com/300x200?text=Treehouse',
  },
  {
    id: 7,
    title: 'Penthouse with View',
    type: 'Apartment',
    price: 350,
    rating: 4.5,
    location: 'Dubai, UAE',
    img: 'https://via.placeholder.com/300x200?text=Dubai+Penthouse',
  },
  {
    id: 8,
    title: 'Safari Lodge',
    type: 'Lodge',
    price: 300,
    rating: 4.8,
    location: 'Kenya',
    img: 'https://via.placeholder.com/300x200?text=Safari+Lodge',
  },
];

const AirbnbClone = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Beachfront',
    'Cabins',
    'OMG!',
    'Tiny homes',
    'Castles',
    'Amazing pools',
  ];

  return (
    <div className="airbnb-container">
      {/* Navbar */}
      <nav className="airbnb-nav">
        <div className="logo">airbnb (Clone)</div>
        <div className="search-widget">
          <button>Anywhere</button>
          <span className="divider">|</span>
          <button>Any week</button>
          <span className="divider">|</span>
          <button className="light">Add guests</button>
          <div className="search-icon-circle">🔍</div>
        </div>
        <div className="nav-profile">
          <span>Become a Host</span>
          <button className="profile-btn">☰ 👤</button>
        </div>
      </nav>

      {/* Categories */}
      <div className="airbnb-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="airbnb-grid">
        {MOCK_LISTINGS.map((item) => (
          <div key={item.id} className="listing-card">
            <div className="listing-image">
              <img src={item.img} alt={item.title} />
              <button className="heart-btn">♡</button>
            </div>
            <div className="listing-info">
              <div className="listing-header">
                <h4>{item.location}</h4>
                <span className="rating">★ {item.rating}</span>
              </div>
              <p className="listing-dist">3,000 miles away</p>
              <p className="listing-date">Oct 22 - 29</p>
              <p className="listing-price">
                <strong>${item.price}</strong> night
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirbnbClone;
