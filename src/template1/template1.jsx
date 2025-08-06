function handleAddToCalendar() {
  const start = '20250830T090000';
  const end = '20250830T110000';
  const text = encodeURIComponent('Pernikahan Rina & Budi');
  const details = encodeURIComponent('Undangan pernikahan Rina & Budi');
  const location = encodeURIComponent('Gedung Serbaguna, Jakarta');
  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
  window.open(url, '_blank');
}
// Countdown component for days and seconds
function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      let diff = Math.max(0, targetDate - now);
      // Calculate months
      let months = (targetDate.getFullYear() - now.getFullYear()) * 12 + (targetDate.getMonth() - now.getMonth());
      // Calculate days, hours, minutes, seconds
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);
      // Adjust days for months
      if (months > 0) {
        // Get the date for the start of the target month
        let monthStart = new Date(now.getFullYear(), now.getMonth() + months, now.getDate());
        days = Math.floor((targetDate - monthStart) / (1000 * 60 * 60 * 24));
      }
      setTimeLeft({ months, days, hours, minutes, seconds });
    }
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="section2-countdown">
      <span className="section2-countdown-box section2-countdown-months">{timeLeft.months} bulan</span>
      <span className="section2-countdown-box section2-countdown-days">{timeLeft.days} hari</span>
      <span className="section2-countdown-box section2-countdown-hours">{timeLeft.hours} jam</span>
      <span className="section2-countdown-box section2-countdown-minutes">{timeLeft.minutes} menit</span>
      <span className="section2-countdown-box section2-countdown-seconds">{timeLeft.seconds} detik</span>
    </div>
  );
}

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
            <div className="section1-photo-frame">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400" alt="Contoh Foto" />
            </div>
            <p className="section1-names">John & Doe</p>
            <p className="section1-date">Kamis, 30 Juli 2025</p>
            <a
              className="section1-rsvp"
              href="https://wa.me/628123453602?text=Halo%20saya%20akan%20hadir%20di%20acara%20pernikahan%20John%20%26%20Doe"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSVP via WhatsApp
            </a>
          </div>
        </div>
        <div className="section2-card">
          <h1 className="section2-title">Instagram web view!</h1>
          <div className="section2-instagram">
            <iframe
              src="https://www.instagram.com/instagram/embed"
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              allowtransparency="true"
              className="section2-instagram-iframe"
              title="Instagram Webview"
            ></iframe>
          </div>
          <p className="section2-location">@instagram</p>
          <h1 className="section2-title">30 Agustus 2025</h1>
          <Countdown targetDate={new Date('2025-08-30T00:00:00')} />
        <button className="section2-button-calendar" onClick={handleAddToCalendar}>Add to Calendar</button>
        </div>
        <div className="invitation-card">
          <h1 className="invitation-title">You're Invited!</h1>
          <p className="invitation-names">Rina & Budi</p>
          <p className="invitation-date">Sabtu, 30 Agustus 2025</p>
          <p className="invitation-location">Gedung Serbaguna, Jakarta</p>
          <div className="invitation-message">
            <p>Dengan penuh sukacita, kami mengundang Anda untuk hadir di acara pernikahan kami.</p>
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
      </div>
    </div>
  );
}