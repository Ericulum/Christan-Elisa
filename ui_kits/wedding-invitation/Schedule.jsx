// Schedule.jsx — Wedding day program/timeline
const schedStyles = {
  page: {
    background: '#FDFAF6',
    width: 420,
    minHeight: 620,
    padding: '44px 48px 48px',
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
    fontSize: 48, color: '#B8922B', lineHeight: 1.1,
    marginBottom: 4,
  },
  sub: {
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 11, fontWeight: 300,
    letterSpacing: '0.2em', textTransform: 'uppercase',
    color: '#9E9088', marginBottom: 32,
  },
  timeline: {
    width: '100%', display: 'flex', flexDirection: 'column', gap: 0,
  },
  item: {
    display: 'flex', gap: 20, alignItems: 'flex-start',
    marginBottom: 0,
  },
  timeCol: {
    width: 56, flexShrink: 0,
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 12, fontWeight: 300,
    color: '#B8922B', letterSpacing: '0.06em',
    textAlign: 'right', paddingTop: 2,
  },
  lineCol: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', gap: 0, flexShrink: 0,
    width: 16,
  },
  dot: (gold) => ({
    width: gold ? 9 : 6, height: gold ? 9 : 6,
    borderRadius: '50%',
    background: gold ? '#B8922B' : '#DDD4CE',
    flexShrink: 0, marginTop: 4,
    border: gold ? '1.5px solid #B8922B' : 'none',
  }),
  connector: {
    flex: 1, width: 1, background: '#DDD4CE',
    minHeight: 28, marginTop: 2,
  },
  textCol: {
    flex: 1, paddingBottom: 24, textAlign: 'left',
  },
  eventTitle: {
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 14, fontWeight: 500,
    color: '#3F5059', letterSpacing: '0.04em',
    lineHeight: 1.3,
  },
  eventSub: {
    fontFamily: "'Mixta Sharp', 'Cormorant Garamond', serif",
    fontSize: 12, fontWeight: 300,
    color: '#9E9088', letterSpacing: '0.04em',
    marginTop: 2, lineHeight: 1.5,
  },
  protea: {
    position: 'absolute', bottom: -20, right: -20,
    width: 160, opacity: 0.1, pointerEvents: 'none',
  },
};

const EVENTS = [
  { time: '07. Aug', title: 'Vorfreuen', sub: 'Ankommen & gemeinsam einstimmen', gold: false },
  { time: '08. Aug', title: 'Kirchliche Trauung', sub: 'Kirche Caputh, Brandenburg', gold: true },
  { time: '', title: 'Hauptfeier', sub: 'Wir heiraten – und es wird mehr als ein Fest!', gold: true },
  { time: '09. Aug', title: 'Ausklingen', sub: 'Gemeinsam den Tag nachwirken lassen', gold: false },
  { time: '18.–22. Okt', title: 'Hochzeitsreise', sub: 'Gemeinsam nach Südafrika — wer mag, kommt mit!', gold: false },
];

function Schedule({ onNavigate }) {
  return (
    <div style={schedStyles.page}>
      <img src="../../assets/Protea.png" style={schedStyles.protea} alt="" />
      <button style={schedStyles.back} onClick={() => onNavigate('invitation')}>← Zurück</button>
      <div style={{ height: 28 }} />
      <div style={schedStyles.title}>Programm</div>
      <div style={schedStyles.sub}>08. August 2026 · Kirche Caputh</div>

      <div style={schedStyles.timeline}>
        {EVENTS.map((ev, i) => (
          <div key={i} style={schedStyles.item}>
            <div style={schedStyles.timeCol}>{ev.time}</div>
            <div style={schedStyles.lineCol}>
              <div style={schedStyles.dot(ev.gold)} />
              {i < EVENTS.length - 1 && <div style={schedStyles.connector} />}
            </div>
            <div style={schedStyles.textCol}>
              <div style={schedStyles.eventTitle}>{ev.title}</div>
              <div style={schedStyles.eventSub}>{ev.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Schedule });
