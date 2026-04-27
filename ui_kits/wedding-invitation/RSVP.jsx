// RSVP.jsx — RSVP form screen
const rsvpStyles = {
  page: {
    background: '#FDFAF6',
    width: 420,
    minHeight: 620,
    padding: '44px 48px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  back: {
    position: 'absolute', top: 20, left: 20,
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 11, letterSpacing: '0.12em',
    textTransform: 'uppercase', color: '#9E9088',
    cursor: 'pointer', background: 'none', border: 'none',
  },
  title: {
    fontFamily: "'Hanifah Salamah', 'Great Vibes', cursive",
    fontSize: 52, color: '#B8922B', lineHeight: 1.1,
    marginBottom: 4,
  },
  sub: {
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 11, fontWeight: 300,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#9E9088', marginBottom: 32,
  },
  field: {
    width: '100%',
    border: 'none',
    borderBottom: '1px solid #DDD4CE',
    background: 'transparent',
    padding: '10px 0',
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 14, fontWeight: 300,
    color: '#3F5059', letterSpacing: '0.04em',
    outline: 'none', marginBottom: 20,
    display: 'block',
    textAlign: 'left',
  },
  toggleRow: {
    display: 'flex', gap: 12, marginBottom: 24, width: '100%',
  },
  toggle: (active) => ({
    flex: 1,
    border: `1px solid ${active ? '#B8922B' : '#DDD4CE'}`,
    background: 'transparent',
    padding: '12px 8px',
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 11, letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: active ? '#B8922B' : '#9E9088',
    cursor: 'pointer',
    transition: 'all 0.3s',
  }),
  note: {
    width: '100%',
    border: 'none',
    borderBottom: '1px solid #DDD4CE',
    background: 'transparent',
    padding: '10px 0',
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 13, fontWeight: 300,
    color: '#3F5059', letterSpacing: '0.04em',
    outline: 'none', marginBottom: 28,
    display: 'block',
    textAlign: 'left',
    resize: 'none',
    height: 56,
  },
  btn: {
    width: '100%',
    background: '#3F5059', color: '#FDFAF6',
    border: 'none',
    padding: '15px',
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 11, letterSpacing: '0.22em',
    textTransform: 'uppercase', cursor: 'pointer',
  },
  protea: {
    position: 'absolute', bottom: -20, right: -20,
    width: 150, opacity: 0.1, pointerEvents: 'none',
  },
  success: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    flex: 1, gap: 16,
  },
  successTitle: {
    fontFamily: "'Hanifah Salamah', 'Great Vibes', cursive",
    fontSize: 48, color: '#B8922B',
  },
  successText: {
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 14, fontWeight: 300,
    color: '#5C7080', letterSpacing: '0.06em',
    lineHeight: 1.8,
  },
};

function RSVP({ onNavigate }) {
  const [attending, setAttending] = React.useState(true);
  const [submitted, setSubmitted] = React.useState(false);
  const [name, setName] = React.useState('');
  const [guests, setGuests] = React.useState('');

  if (submitted) {
    return (
      <div style={rsvpStyles.page}>
        <img src="../../assets/Protea.png" style={rsvpStyles.protea} alt="" />
        <div style={rsvpStyles.success}>
          <div style={rsvpStyles.successTitle}>Danke schön!</div>
          <div style={rsvpStyles.successText}>
            Wir freuen uns auf Euch.<br />
            Bis zum 08. August 2026!
          </div>
          <div style={{ width: 40, height: 1, background: '#DDD4CE', margin: '8px 0' }} />
          <button onClick={() => onNavigate('invitation')} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
            fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#9E9088',
          }}>← Zurück zur Einladung</button>
        </div>
      </div>
    );
  }

  return (
    <div style={rsvpStyles.page}>
      <img src="../../assets/Protea.png" style={rsvpStyles.protea} alt="" />
      <button style={rsvpStyles.back} onClick={() => onNavigate('invitation')}>← Zurück</button>

      <div style={{ height: 28 }} />
      <div style={rsvpStyles.title}>RSVP</div>
      <div style={rsvpStyles.sub}>Die Einladung mit allen Details folgt.</div>

      <input
        style={rsvpStyles.field}
        placeholder="Euer Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        style={rsvpStyles.field}
        placeholder="Anzahl der Personen"
        value={guests}
        onChange={e => setGuests(e.target.value)}
      />

      <div style={rsvpStyles.toggleRow}>
        <button style={rsvpStyles.toggle(attending)} onClick={() => setAttending(true)}>Wir kommen</button>
        <button style={rsvpStyles.toggle(!attending)} onClick={() => setAttending(false)}>Leider nicht</button>
      </div>

      {attending && (
        <textarea style={rsvpStyles.note} placeholder="Unverträglichkeiten oder Anmerkungen …" />
      )}

      <button style={rsvpStyles.btn} onClick={() => setSubmitted(true)}>Absenden</button>
    </div>
  );
}

Object.assign(window, { RSVP });
