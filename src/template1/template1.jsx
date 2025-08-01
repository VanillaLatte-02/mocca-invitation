
import './template1.css';

import { useEffect, useState } from 'react';

export default function Template1() {

  return (
    <div className="invitation-container">
      <div className="invitation-content">
        <div className="section1-card section1-card-video">
          <video
            className="section1-bg-video"
            src={"/src/assets/video_sakura.mp4"}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="section1-content-overlay" style={{position: 'relative', zIndex: 1}}>
            <h1 className="section1-title">You're Invited!</h1>
            <p className="section1-names">John & Doe</p>
            <p className="section1-date">Kamis, 30 Juli 2025</p>
            <button className="section1-rsvp">RSVP</button>
          </div>
        </div>
        <div className="invitation-card">
          <h1 className="invitation-title">You're Invited!</h1>
          <p className="invitation-names">Rina & Budi</p>
          <p className="invitation-date">Sabtu, 30 Agustus 2025</p>
          <p className="invitation-location">Gedung Serbaguna, Jakarta</p>
          <div className="invitation-message">
            <p>Dengan penuh sukacita, kami mengundang Anda untuk hadir di acara pernikahan kami.</p>
          </div>
          <button className="invitation-rsvp">RSVP</button>
        </div>
        <div className="invitation-card">
          <h1 className="invitation-title">You're Invited!</h1>
          <p className="invitation-names">Rina & Budi</p>
          <p className="invitation-date">Sabtu, 30 Agustus 2025</p>
          <p className="invitation-location">Gedung Serbaguna, Jakarta</p>
          <div className="invitation-message">
            <p>Dengan penuh sukacita, kami mengundang Anda untuk hadir di acara pernikahan kami.</p>
          </div>
          <button className="invitation-rsvp">RSVP</button>
        </div>
        <div className="invitation-card">
          <h1 className="invitation-title">You're Invited!</h1>
          <p className="invitation-names">Rina & Budi</p>
          <p className="invitation-date">Sabtu, 30 Agustus 2025</p>
          <p className="invitation-location">Gedung Serbaguna, Jakarta</p>
          <div className="invitation-message">
            <p>Dengan penuh sukacita, kami mengundang Anda untuk hadir di acara pernikahan kami.</p>
          </div>
          <button className="invitation-rsvp">RSVP</button>
        </div>
      </div>
    </div>
  );
}