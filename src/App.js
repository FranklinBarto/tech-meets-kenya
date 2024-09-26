import React, { useState, useEffect } from "react";

import { Search } from 'lucide-react';

import "./App.scss";
import { appendIds } from "./utils/utils";
import Database_JSON from './assets/data/database.json';
const App = () => {
  const Database = appendIds(Database_JSON)
  // console.log(Database)
  // const [searchTerm, setSearchTerm] = useState("");
  // const [dateRange, setDateRange] = useState("06.18-06.25");
  // const [region, setRegion] = useState("Region");
  const [filter, setFilter] = useState("Choose one");

  const [selectedTypes, setSelectedTypes] = useState(['ALL']);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(Database);
  const [noItems,setNoItems] = useState();

  const eventTypes = ['ALL','AI/ML','AI/ML', 'Data', 'CyberSec', 'Web', 'App'];


  const handleTypeClick = (type) => {
    setSelectedTypes((prevSelected) => {
      if (type === 'ALL') return ['ALL'];
      let newSelected = prevSelected.includes(type)
        ? prevSelected.filter(t => t !== type)
        : [...prevSelected.filter(t => t !== 'ALL'), type];
      return newSelected.length ? newSelected : ['ALL'];
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === 'startDate') setStartDate(value);
    else if (name === 'endDate') setEndDate(value);
  };

  useEffect(() => {
    let filtered = Database;

    // Filter by type
    if (!selectedTypes.includes('ALL')) {
      filtered = filtered.filter(event => selectedTypes.includes(event.type));
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event => 
        JSON.stringify(event).toLowerCase().includes(query)
      );
    }

    // Filter by date range
    if (startDate) {
      filtered = filtered.filter(event => event.date >= startDate);
    }
    if (endDate) {
      filtered = filtered.filter(event => event.date <= endDate);
    }

    setFilteredEvents(filtered);
    setNoItems(filtered.length)
  }, [selectedTypes, searchQuery, startDate, endDate, Database]);

  return (
    <div className="app">
      <header>
        <div className="logo">
          <span className="triangle"></span> Tech Meets Kenya
        </div>
        <nav>
          <a href="#Events">Events</a>
          <a href="#Conference">Conference</a>
          <a href="#Networking">Networking</a>
          <a href="#About">About</a>
        </nav>
        <button className="connect-wallet">
          <span className="wallet-icon"></span>
          Sign Up
        </button>
      </header>

      <main>
        <div className="hero">
          <div className="announcement">
            A web Scraping project{" "}
            <a href="#readmore">
              Read More <span className="arrow">↗</span>
            </a>
          </div>

          <h1>
            Your Gateway To
            <br /> Tech Meetups in Kenya
          </h1>

          <p className="description">
            We scour the web to bring you up-to-date information on tech events,
            conferences, workshops
            <br /> and networking opportunities happening in Nairobi, Mombasa,
            Kisumu, and beyond.
          </p>

          <div className="cta-buttons">
            <button className="primary">
              Join the Community <span className="arrow">↗</span>
            </button>
            <button className="secondary">
              Explore Events <span className="arrow">↗</span>
            </button>
          </div>

        </div>

        <div className="container">
          <section className="app-header">
            <div className="tabs">
              <button className="active">EVENTS</button>
              <button>CALENDAR</button>
            </div>
            <button className="attendee-sign-in">Attendee sign-in</button>
          </section>

          <div className="filters">
            <div className="event-types">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  className={`${
                    selectedTypes.includes(type)
                      ? 'active'
                      : ''
                  }`}
                  onClick={() => handleTypeClick(type)}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="date-picker">
              <input
                type="date"
                name="startDate"
                value={startDate}
                onChange={handleDateChange}
              />
              <span>from</span>
            </div>

            <div className="date-picker">
              {/* <input
                type="text"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              /> */}
              <input
                type="date"
                name="endDate"
                value={endDate}
                onChange={handleDateChange}
              />
              <span>to</span>
            </div>

            <div className="search">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={handleSearch}
              />
              <Search className="icon" size={20} />
            </div>

            {/* <div className="region-select">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option>Region</option>
              </select>
            </div> */}
          </div>

          <section>
            <div className="events-header">
              <h2>{noItems} events found</h2>
              <div className="filter-dropdown">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option>Choose one</option>
                </select>
              </div>
            </div>

            <div className="events-list">
              
            {filteredEvents.map((event) => (
                <div key={event.id} className="event-card" onClick={() => window.open(event.link, '_blank')}>
                  <div className="event-image">
                    {event.image_url!=='Image URL not found'&&<img src={event.image_url} alt={event.title} />}
                    <a href={event.owner_url} className="event-rating">{event.owner}</a>
                  </div>
                  <div className="event-details">
                    <h3>{event.title}</h3>
                    <p className="description">{event.description}</p>
                    {/* <p className="cost">Cost: {event.cost}</p> */}
                    <p className="date">
                      <span className="icon">📅</span> {event.date}
                    </p>
                    <p className="place">
                      <span className="icon">📍</span>
                      {event.location}
                    </p>
                    {/* <span className={`event-type ${event.type.toLowerCase()}`}>
                      {event.type}
                    </span> */}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
