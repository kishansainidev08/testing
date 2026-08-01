import './App.css'

const App = () => {
  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-copy">
          <h1>Kishan Kumar Saini</h1>
          <span className="eyebrow">Balanced-K.K.SAINI</span>
          <h1>Build better habits without burnout.</h1>
          <p>
            Simple tools for planning your day, tracking your progress, and staying centered
            with routines that fit your life.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#features">
              Explore features
            </a>
            <a className="button secondary" href="#why">
              Learn why
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-hidden="true">
          <div className="stats-card">
            <div className="stats-header">Today</div>
            <div className="stats-grid">
              <div>
                <strong>3</strong>
                <span>Habits</span>
              </div>
              <div>
                <strong>5</strong>
                <span>Focus sessions</span>
              </div>
              <div>
                <strong>8h</strong>
                <span>Balance score</span>
              </div>
            </div>
          </div>
          <div className="feature-badge">Daily routine designed for calm productivity</div>
        </div>
      </header>

      <main>
        <section id="features" className="feature-grid">
          <article className="feature-card">
            <h2>Track habits effortlessly</h2>
            <p>Set reminders, mark wins, and see how small changes add up over time.</p>
          </article>
          <article className="feature-card">
            <h2>Focus on what matters</h2>
            <p>Use concise daily plans to stay clear, reduce overwhelm, and keep your energy steady.</p>
          </article>
          <article className="feature-card">
            <h2>Build lasting routines</h2>
            <p>Combine wellness, work, and rest into a rhythm that keeps you present and productive.</p>
          </article>
        </section>

        <section id="why" className="detail-section">
          <div>
            <h2>Why Balanced works</h2>
            <p>
              Balanced is designed to help you stop chasing perfection and start building a daily
              rhythm that feels sustainable. Focus on one step at a time and make progress with
              calm confidence.
            </p>
          </div>
          <div className="detail-list">
            <div>
              <strong>Minimal setup</strong>
              <p>Create a routine in minutes and keep your workflow distraction-free.</p>
            </div>
            <div>
              <strong>Progress visibility</strong>
              <p>Track streaks, review trends, and celebrate wins without extra effort.</p>
            </div>
            <div>
              <strong>Everyday balance</strong>
              <p>Not too much, not too little — just the right mix of focus, rest, and clarity.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App