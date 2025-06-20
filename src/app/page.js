import React from 'react';

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1E40AF' }}>Airport To Airport - שירות השכרת רכב בטביליסי</h1>
      <p style={{ marginTop: '1rem' }}>📲 שכרו רכב עכשיו ב-WhatsApp</p>
      <a href="https://wa.me/972505115917" target="_blank" rel="noopener noreferrer">
        <button style={{ marginTop: '1rem', padding: '1rem 2rem', backgroundColor: '#22c55e', color: 'white', fontSize: '1.2rem', borderRadius: '12px' }}>
          התחילו עכשיו
        </button>
      </a>
    </main>
  );
}