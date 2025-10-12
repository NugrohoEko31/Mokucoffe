import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './LocationSection.css';
import gojekLogo from '../assets/gofood.png';
import grabLogo from '../assets/grabfood.png';

const LocationSection = () => {
  const position = [-0.04922545648092886, 109.333499552344];
  const gmap = `https://www.google.com/maps?q=${position[0]},${position[1]}`;
  const gojek = "https://gofood.link/LOCASI_CAFE";
  const grab = "https://www.grab.com/id/food/";

  return (
    <section id="location" className="location-section">
      <div className="location-container">
        <h2 className="location-title">OUR LOCATION</h2>
        <p className="location-desc"></p>
        <div className="location-content-flex">
          <div className="location-map-card">
            <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="location-map">
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} eventHandlers={{ click: () => window.open(gmap, '_blank') }}>
                <Popup>
                  <b>Cafe Kamu</b><br />Klik marker atau tombol di samping untuk buka Maps/Order.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="location-info-column">
            <h2 className="contact-info-title">Address</h2>
            <p className="contact-info-data">
              Gg. Purnama 2A No.19, Akcaya, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78113
            </p>
            <div className="location-app-row">
              <a href={gojek} target="_blank" rel="noopener noreferrer" className="location-app-link">
                <img src={gojekLogo} alt="Order via Gojek" className="app-logo" />
              </a>
              <a href={grab} target="_blank" rel="noopener noreferrer" className="location-app-link">
                <img src={grabLogo} alt="Order via Grab" className="app-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
