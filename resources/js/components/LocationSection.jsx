import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './LocationSection.css';
import gojekLogo from '../assets/gojek.png';
import grabLogo from '../assets/grab.png';
import bgImage from '../assets/Background Coklat.jpg';

const LocationSection = () => {
  const position = [-0.04922545648092886, 109.333499552344];
  const gmap = `https://www.google.com/maps?q=${position[0]},${position[1]}`;
  const gojek = "https://gofood.link/";
  const grab = "https://www.grab.com/id/food/";

  const handleMapCardClick = () => {
    window.open(gmap, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
        id="location"
        className="location-section"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100%',
        }}
      >
      <div className="location-container">
        <h2 className="location-title">Lokasi Kami</h2>
        <p className="location-desc">Ingin berkunjung ke toko fisik langsung? Lihat panduan lokasi berikut atau kontak kami untuk memastikan ketersediaan produk incaran Anda.</p>
        <div className="location-content-flex">
          <div
            className="location-map-card"
            style={{ cursor: 'pointer', position: 'relative' }}
            onClick={handleMapCardClick}
            title="Klik untuk buka Google Maps"
          >
            <div style={{
              position: 'absolute', zIndex: 2,
              width: '100%', height: '100%',
              top: 0, left: 0
            }}></div>
            <MapContainer
              center={position}
              zoom={16}
              scrollWheelZoom={false}
              className="location-map"
              style={{ pointerEvents: 'none' }} 
            >
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <b>Cafe Kamu</b><br />Klik maps untuk buka Google Maps!
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="location-info-column">
            <h2 className="location-info-title">Alamat Kami</h2>
            <p className="location-info-text">
              Gg. Purnama 2A No.19, Akcaya, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78113
            </p>
            <h2 className="order-direct-title">Pesan Langsung?</h2>
            <div className="location-app-row">
              <a href={grab} target="_blank" rel="noopener noreferrer" className="location-app-link">
                <img src={grabLogo} alt="Order via Grab" className="app-logo" />
              </a>
              <a href={gojek} target="_blank" rel="noopener noreferrer" className="location-app-link">
                <img src={gojekLogo} alt="Order via Gojek" className="app-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
