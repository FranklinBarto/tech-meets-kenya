import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState("06.18-06.25");
  const [region, setRegion] = useState("Region");
  const [filter, setFilter] = useState("Choose one");

  const events = [
    {
      id: 1,
      title: "Tea ceremony",
      description: "The event will unite numerous Developers around the Globe.",
      cost: "$32",
      date: "22 March 2024 15:00-19:00",
      place: "La Losange, France",
      type: "RELAX",
      image: "path_to_image.jpg",
    },
    {
      id: 2,
      title:
        "CodeCrafters Confluence: Uniting Minds in the World of Development",
      description: "The event will unite numerous Developers around the Globe.",
      cost: "Free",
      date: "22 July 2024 19:00-20:00",
      place: "Online",
      type: "EDUCATIONAL",
      image: "path_to_image.jpg",
    },
    {
      id: 3,
      title: "Streets of Philadelphia Autotest",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      cost: "Free",
      date: "22 August 2024 11:00-15:00",
      place: "Kyiv, Ukraine, 02000",
      type: "GAMES",
      image: "path_to_image.jpg",
    },
  ];

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
              Trade AMB on firepot <span className="arrow">↗</span>
            </button>
            <button className="secondary">
              Use AMB Bridge <span className="arrow">↗</span>
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
              <button className="active">ALL</button>
              <button>BIT</button>
              <button>EDUCATIONAL</button>
              <button>CHARITY</button>
              <button>FOR CHILDREN</button>
              <button>ONLINE</button>
            </div>

            <div className="search">
              <input
                type="text"
                placeholder="Enter a Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="date-picker">
              <input
                type="text"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              />
            </div>

            <div className="region-select">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option>Region</option>
              </select>
            </div>
          </div>

          <section>
            <div className="events-header">
              <h2>4 events found</h2>
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
              {events.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <span className="event-rating">7.10</span>
                  </div>
                  <div className="event-details">
                    <h3>{event.title}</h3>
                    <p className="description">{event.description}</p>
                    <p className="cost">Cost: {event.cost}</p>
                    <p className="date">
                      <span className="icon">📅</span> {event.date}
                    </p>
                    <p className="place">
                      <span className="icon">📍</span> {event.place}
                    </p>
                    <span className={`event-type ${event.type.toLowerCase()}`}>
                      {event.type}
                    </span>
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
