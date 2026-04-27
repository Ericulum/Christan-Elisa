// index.jsx — Main app shell
const { useState, useEffect } = React;

function App() {
  const [screen, setScreen] = useState(() => {
    return localStorage.getItem('wedding_screen') || 'invitation';
  });

  useEffect(() => {
    localStorage.setItem('wedding_screen', screen);
  }, [screen]);

  const navigate = (s) => setScreen(s);

  const wrapStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%',
    padding: 24,
  };

  const cardShadow = {
    boxShadow: '0 8px 48px 0 rgba(40,53,60,0.13), 0 2px 8px 0 rgba(40,53,60,0.07)',
  };

  return (
    <div style={wrapStyle}>
      <div style={cardShadow}>
        {screen === 'invitation' && <Invitation onNavigate={navigate} />}
        {screen === 'rsvp' && <RSVP onNavigate={navigate} />}
        {screen === 'schedule' && <Schedule onNavigate={navigate} />}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
