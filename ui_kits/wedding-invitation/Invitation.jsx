// Invitation.jsx — Hero invitation screen
const invStyles = {
  page: {
    background: '#FDFAF6',
    width: 420,
    minHeight: 620,
    padding: '52px 48px 48px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  protea: {
    position: 'absolute',
    bottom: -40, right: -30,
    width: 220,
    opacity: 0.13,
    pointerEvents: 'none',
    userSelect: 'none',
  },
  proteaTop: {
    position: 'absolute',
    top: -60, left: -40,
    width: 180,
    opacity: 0.08,
    transform: 'rotate(180deg)',
    pointerEvents: 'none',
    userSelect: 'none',
  },
  label: {
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 10,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#9E9088',
    marginBottom: 28,
  },
  display: {
    fontFamily: "'Hanifah Salamah', 'Great Vibes', cursive",
    fontSize: 38,
    color: '#B8922B',
    lineHeight: 1.4,
    marginBottom: 40,
  },
  sub: {
    fontFamily: "'Hanifah Salamah', 'Pinyon Script', cursive",
    fontSize: 22,
    color: '#5C7080',
    lineHeight: 1.5,
    marginBottom: 28,
  },
  hairline: {
    width: 56, height: 1,
    background: '#DDD4CE',
    margin: '0 auto 28px',
  },
  names: {
    fontFamily: "'Hanifah Salamah', 'Pinyon Script', cursive",
    fontSize: 58,
    color: '#3F5059',
    lineHeight: 1,
    marginBottom: 28,
  },
  amp: { color: '#B8922B' },
  ornamentRow: {
    display: 'flex', alignItems: 'center', gap: 10,
    width: '100%', marginBottom: 28,
  },
  ornLine: { flex: 1, height: 1, background: '#DDD4CE' },
  ornDots: { display: 'flex', gap: 5, alignItems: 'center' },
  dot: { width: 4, height: 4, borderRadius: '50%', background: '#C0B2AA' },
  dotGold: { width: 5, height: 5, borderRadius: '50%', background: '#B8922B' },
  detail: {
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 13,
    fontWeight: 300,
    color: '#3F5059',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    lineHeight: 2.2,
  },
  detailGold: { color: '#B8922B' },
  footer: {
    marginTop: 28,
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 11,
    fontWeight: 300,
    color: '#9E9088',
    letterSpacing: '0.12em',
    lineHeight: 1.8,
  },
};

function Invitation({ onNavigate }) {
  return (
    <div style={invStyles.page}>
      <img src="../../assets/Protea.png" style={invStyles.proteaTop} alt="" />
      <img src="../../assets/Protea.png" style={invStyles.protea} alt="" />

      <div style={invStyles.label}>Herzliche Einladung</div>

      <div style={invStyles.display}>Wir heiraten –</div>
      <div style={invStyles.sub}>und es wird mehr als ein Fest!</div>

      <div style={invStyles.hairline} />

      <div style={invStyles.names}>
        Elisa <span style={invStyles.amp}>&amp;</span> Christan
      </div>

      <div style={invStyles.ornamentRow}>
        <div style={invStyles.ornLine} />
        <div style={invStyles.ornDots}>
          <div style={invStyles.dot} />
          <div style={invStyles.dotGold} />
          <div style={invStyles.dot} />
        </div>
        <div style={invStyles.ornLine} />
      </div>

      <div style={invStyles.detail}>
        <span style={invStyles.detailGold}>08 | 08 | 2026</span><br />
        Kirchliche Trauung & Hauptfeier<br />
        <br />
        Kirche Caputh<br />
        Brandenburg
      </div>

      <div style={invStyles.footer}>
        07. Aug · Vorfreuen &nbsp;·&nbsp; 08. Aug · Trauung &nbsp;·&nbsp; 09. Aug · Ausklingen
      </div>

      <div style={{ marginTop: 36, display: 'flex', gap: 12 }}>
        <button onClick={() => onNavigate('rsvp')} style={{
          background: '#3F5059', color: '#FDFAF6',
          border: 'none', padding: '13px 28px',
          fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
          fontSize: 11, letterSpacing: '0.18em',
          textTransform: 'uppercase', cursor: 'pointer',
        }}>RSVP</button>
        <button onClick={() => onNavigate('schedule')} style={{
          background: 'transparent', color: '#3F5059',
          border: '1px solid #DDD4CE', padding: '13px 28px',
          fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
          fontSize: 11, letterSpacing: '0.18em',
          textTransform: 'uppercase', cursor: 'pointer',
        }}>Programm</button>
      </div>
    </div>
  );
}

Object.assign(window, { Invitation });
