import React from 'react';

const AboutPage = () => {
  return (
    <div style={{
      minHeight: 'calc(100vh - 90px)',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      background: 'rgba(255,255,255,0.18)',
      borderRadius: '32px',
      boxShadow: '0 32px 80px rgba(30, 64, 175, 0.18), 0 16px 48px rgba(37, 99, 235, 0.12)',
      margin: '0 auto',
      maxWidth: '1200px',
      padding: '6vw 4vw',
      position: 'relative',
      overflow: 'hidden',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      border: '1.5px solid rgba(129,140,248,0.18)',
      transition: 'background 0.5s, box-shadow 0.5s',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 700,
        margin: '0 auto',
        marginBottom: '12px',
        padding: '8px 0 0 0',
        borderRadius: 24,
        background: 'rgba(255,255,255,0.32)',
        boxShadow: '0 8px 32px #818cf880',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1.5px solid rgba(129,140,248,0.18)',
        textAlign: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <h1 style={{
          fontSize: '3.2rem',
          fontWeight: 900,
          letterSpacing: '2px',
          marginBottom: '0.05em',
          marginTop: '0',
          paddingTop: '0',
          background: 'linear-gradient(90deg, #818cf8 0%, #e0e7ef 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textAlign: 'center',
        }}>
          RoverXplorer
        </h1>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: 'linear-gradient(90deg, #fbbf24 0%, #818cf8 100%)',
          marginTop: '-0.4em',
          marginBottom: 0,
          textAlign: 'right',
          letterSpacing: '1px',
          background: 'linear-gradient(90deg, #fbbf24 0%, #818cf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          paddingRight: '2vw',
        }}>
          powered by <span style={{ fontWeight: 900, letterSpacing: '2px' }}>ChipMasters</span>
        </h2>
      </div>
      {/* Overview Section Start */}
      <div style={{
        width: '100%',
        maxWidth: 900,
        margin: '0 auto 28px',
        padding: '32px 32px',
        borderRadius: 28,
        background: 'rgba(255,255,255,0.38)',
        boxShadow: '0 8px 32px #818cf880',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '2px solid rgba(129,140,248,0.18)',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '2.1rem',
          fontWeight: 900,
          marginBottom: '24px',
          background: 'linear-gradient(90deg, #818cf8 0%, #fbbf24 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Overview
        </h2>
        {/* Introduction Section */}
        <div className="about-animated-section" style={{
          width: '100%',
          maxWidth: 1000,
          margin: '0 auto 18px',
          padding: '18px 24px',
          borderRadius: 18,
          background: 'rgba(255,255,255,0.28)',
          boxShadow: '0 4px 16px #818cf850',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(129,140,248,0.12)',
          textAlign: 'center',
          transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s',
        }}
        onMouseMove={e => {
          const box = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - box.left;
          const y = e.clientY - box.top;
          e.currentTarget.style.transform = `scale(1.03) rotateX(${(y-box.height/2)/30}deg) rotateY(${(x-box.width/2)/30}deg)`;
          e.currentTarget.style.boxShadow = '0 8px 32px #818cf880, 0 2px 12px #818cf850';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 16px #818cf850';
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            marginBottom: '10px',
            background: 'linear-gradient(90deg, #818cf8 0%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Introduction
          </h3>
          <p style={{ fontSize: '1.08rem', color: '#334155', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
            RoverXplorer is a next-generation microcontroller-based rover.<br />
            It features a rocker bogie mechanism for advanced terrain navigation.<br />
            The rover collects and transmits environmental data wirelessly.<br />
            Designed for exploration, control, and real-time visualization.
          </p>
        </div>
        {/* Why Section */}
        <div className="about-animated-section" style={{
          width: '100%',
          maxWidth: 1000,
          margin: '0 auto 18px',
          padding: '18px 24px',
          borderRadius: 18,
          background: 'rgba(255,255,255,0.28)',
          boxShadow: '0 4px 16px #818cf850',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(129,140,248,0.12)',
          textAlign: 'center',
          transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s',
        }}
        onMouseMove={e => {
          const box = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - box.left;
          const y = e.clientY - box.top;
          e.currentTarget.style.transform = `scale(1.03) rotateX(${(y-box.height/2)/30}deg) rotateY(${(x-box.width/2)/30}deg)`;
          e.currentTarget.style.boxShadow = '0 8px 32px #818cf880, 0 2px 12px #818cf850';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 16px #818cf850';
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            marginBottom: '10px',
            background: 'linear-gradient(90deg, #fbbf24 0%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Why?
          </h3>
          <p style={{ fontSize: '1.08rem', color: '#334155', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
            Traditional rovers struggle with rough terrain, limited sensor integration, and real-time data transmission.<br />
            RoverXplorer is designed to overcome these challenges with advanced mobility, robust sensor suite, and seamless wireless communication.<br />
            This project aims to enable safe, efficient, and interactive exploration for research, education, and innovation.
          </p>
        </div>
        {/* Solution Section */}
        <div className="about-animated-section" style={{
          width: '100%',
          maxWidth: 1000,
          margin: '0 auto 18px',
          padding: '18px 24px',
          borderRadius: 18,
          background: 'rgba(255,255,255,0.28)',
          boxShadow: '0 4px 16px #818cf850',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(129,140,248,0.12)',
          textAlign: 'center',
          transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s',
        }}
        onMouseMove={e => {
          const box = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - box.left;
          const y = e.clientY - box.top;
          e.currentTarget.style.transform = `scale(1.03) rotateX(${(y-box.height/2)/30}deg) rotateY(${(x-box.width/2)/30}deg)`;
          e.currentTarget.style.boxShadow = '0 8px 32px #818cf880, 0 2px 12px #818cf850';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 16px #818cf850';
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            marginBottom: '10px',
            background: 'linear-gradient(90deg, #818cf8 0%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Solution
          </h3>
          <p style={{ fontSize: '1.08rem', color: '#334155', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
            RoverXplorer solves these challenges with a <b>rocker bogie mechanism</b> for superior terrain navigation, a <b>suite of advanced sensors</b> for comprehensive data collection, and <b>bidirectional wireless communication</b> for real-time control and feedback.<br />
            Its modular design allows easy integration of new sensors and features, while the glassy dashboard provides live data visualization and control.<br />
            Unique features include seamless Bluetooth relay, LORA telemetry, and a modern UI for interactive exploration.<br />
            This approach makes RoverXplorer ideal for research, education, and innovative field applications.
          </p>
        </div>
      </div>
      {/* Overview Section End */}
      {/* Key Features and Benefits Section Start */}
      <div style={{
        width: '100%',
        maxWidth: 900,
        margin: '0 auto 32px',
        padding: '32px 32px',
        borderRadius: 28,
        background: 'rgba(255,255,255,0.38)',
        boxShadow: '0 8px 32px #818cf880',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '2px solid rgba(129,140,248,0.18)',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '2.1rem',
          fontWeight: 900,
          marginBottom: '24px',
          background: 'linear-gradient(90deg, #fbbf24 0%, #818cf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Key Features and Benefits
        </h2>
        {/* Features Subsection */}
        <div style={{
          width: '100%',
          maxWidth: 820,
          margin: '0 auto 18px',
          padding: '18px 24px',
          borderRadius: 18,
          background: 'rgba(255,255,255,0.28)',
          boxShadow: '0 4px 16px #818cf850',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(129,140,248,0.12)',
          textAlign: 'left',
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 800,
            marginBottom: '10px',
            background: 'linear-gradient(90deg, #818cf8 0%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Features
          </h3>
          <ul style={{ fontSize: '1.08rem', color: '#334155', fontWeight: 500, lineHeight: 1.7, margin: 0, paddingLeft: '1.2em' }}>
            <li>Advanced rocker bogie mechanism for terrain navigation</li>
            <li>Comprehensive sensor suite: temperature, humidity, distance, CO₂, light, UV</li>
            <li>Bidirectional LORA wireless communication</li>
            <li>Bluetooth relay for seamless laptop integration</li>
            <li>Live dashboard with glassmorphism and animated gradients</li>
            <li>Remote control with joysticks and camera orientation</li>
            <li>Modular design for easy upgrades and sensor additions</li>
            <li>Real-time data visualization and video streaming</li>
          </ul>
        </div>
        {/* Benefits Subsection */}
        <div style={{
          width: '100%',
          maxWidth: 820,
          margin: '0 auto 18px',
          padding: '18px 24px',
          borderRadius: 18,
          background: 'rgba(255,255,255,0.28)',
          boxShadow: '0 4px 16px #818cf850',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(129,140,248,0.12)',
          textAlign: 'left',
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 800,
            marginBottom: '10px',
            background: 'linear-gradient(90deg, #fbbf24 0%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Benefits
          </h3>
          <ul style={{ fontSize: '1.08rem', color: '#334155', fontWeight: 500, lineHeight: 1.7, margin: 0, paddingLeft: '1.2em' }}>
            <li>Enables safe and efficient exploration of challenging environments</li>
            <li>Provides real-time insights for research, education, and innovation</li>
            <li>Improves user experience with interactive control and live data</li>
            <li>Facilitates rapid prototyping and sensor integration for new projects</li>
            <li>Supports remote monitoring and control from anywhere</li>
            <li>Enhances learning with hands-on robotics and IoT applications</li>
            <li>Boosts productivity and creativity in fieldwork and experiments</li>
          </ul>
        </div>
      </div>
      {/* Key Features and Benefits Section End */}
      {/* Getting Started Section Start */}
      <div style={{
        width: '100%',
        maxWidth: 900,
        margin: '0 auto 32px',
        padding: '32px 32px',
        borderRadius: 28,
        background: 'rgba(255,255,255,0.38)',
        boxShadow: '0 8px 32px #818cf880',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '2px solid rgba(129,140,248,0.18)',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '2.1rem',
          fontWeight: 900,
          marginBottom: '24px',
          background: 'linear-gradient(90deg, #818cf8 0%, #fbbf24 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Getting Started
        </h2>
        {/* Informative Video Subsection */}
        <div style={{
          width: '100%',
          maxWidth: 820,
          margin: '0 auto 18px',
          padding: '18px 24px',
          borderRadius: 18,
          background: 'rgba(255,255,255,0.28)',
          boxShadow: '0 4px 16px #818cf850',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(129,140,248,0.12)',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 800,
            marginBottom: '10px',
            background: 'linear-gradient(90deg, #818cf8 0%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Informative Video
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '8px' }}>
            <iframe width="420" height="235" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Informative Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ borderRadius: '16px', boxShadow: '0 2px 8px #818cf880' }}></iframe>
          </div>
        </div>
        {/* Documentation Subsection */}
        <div style={{
          width: '100%',
          maxWidth: 820,
          margin: '0 auto 18px',
          padding: '18px 24px',
          borderRadius: 18,
          background: 'rgba(255,255,255,0.28)',
          boxShadow: '0 4px 16px #818cf850',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(129,140,248,0.12)',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 800,
            marginBottom: '10px',
            background: 'linear-gradient(90deg, #fbbf24 0%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Documentation
          </h3>
          <a href="#" style={{
            display: 'inline-block',
            padding: '10px 28px',
            fontSize: '1rem',
            fontWeight: 600,
            color: '#fff',
            background: 'linear-gradient(90deg, #fbbf24 0%, #818cf8 100%)',
            borderRadius: 20,
            boxShadow: '0 2px 8px #818cf880',
            textDecoration: 'none',
            marginTop: '6px',
            transition: 'background 0.3s',
          }}>View Documentation</a>
        </div>
      </div>
      {/* Getting Started Section End */}
      {/* Project Details and Status Section Start */}
      <div style={{
        width: '100%',
        maxWidth: 900,
        margin: '0 auto 32px',
        padding: '32px 32px',
        borderRadius: 28,
        background: 'rgba(255,255,255,0.38)',
        boxShadow: '0 8px 32px #818cf880',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '2px solid rgba(129,140,248,0.18)',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '2.1rem',
          fontWeight: 900,
          marginBottom: '24px',
          background: 'linear-gradient(90deg, #818cf8 0%, #fbbf24 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Project Details and Status
        </h2>
        {/* Status Subsection */}
        <div style={{
          width: '100%',
          maxWidth: 820,
          margin: '0 auto 18px',
          padding: '18px 24px',
          borderRadius: 18,
          background: 'rgba(255,255,255,0.28)',
          boxShadow: '0 4px 16px #818cf850',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(129,140,248,0.12)',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 800,
            marginBottom: '10px',
            background: 'linear-gradient(90deg, #818cf8 0%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Status
          </h3>
          <span style={{ fontSize: '1.08rem', color: '#334155', fontWeight: 600, lineHeight: 1.7 }}>
            In Development
          </span>
        </div>
        {/* Timeline Subsection */}
        <div style={{
          width: '100%',
          maxWidth: 820,
          margin: '0 auto 18px',
          padding: '18px 24px',
          borderRadius: 18,
          background: 'rgba(255,255,255,0.28)',
          boxShadow: '0 4px 16px #818cf850',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(129,140,248,0.12)',
          textAlign: 'left',
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 800,
            marginBottom: '10px',
            background: 'linear-gradient(90deg, #fbbf24 0%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Timeline
          </h3>
          <ul style={{ fontSize: '1.08rem', color: '#334155', fontWeight: 500, lineHeight: 1.7, margin: 0, paddingLeft: '1.2em' }}>
            <li>February: Initial concept and team formation</li>
            <li>March: Sensor selection and placement planning</li>
            <li>April: Rover body design and prototyping</li>
            <li>May: PCB design and hardware integration</li>
            <li>June: Coding phase and system integration</li>
            <li>July: Testing, debugging, and dashboard development</li>
            <li>August: Final assembly, documentation, and demo</li>
          </ul>
        </div>
        {/* Contact Information Subsection */}
        <div style={{
          width: '100%',
          maxWidth: 820,
          margin: '0 auto 18px',
          padding: '18px 24px',
          borderRadius: 18,
          background: 'rgba(255,255,255,0.28)',
          boxShadow: '0 4px 16px #818cf850',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(129,140,248,0.12)',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 800,
            marginBottom: '10px',
            background: 'linear-gradient(90deg, #818cf8 0%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Contact Information
          </h3>
          <ul style={{ fontSize: '1.08rem', color: '#334155', fontWeight: 500, lineHeight: 2.2, margin: '0 auto', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', maxWidth: 340 }}>
            <li>Suthankan Balenthiran</li>
            <li>Niroja Vijayakumar</li>
            <li>Sathurjan VijithaKumarasena</li>
            <li>Pious Peries Hepzhibha Peries</li>
            <li>Keshani Logathasan</li>
          </ul>
          <a href="#" style={{
            display: 'inline-block',
            padding: '10px 28px',
            fontSize: '1rem',
            fontWeight: 600,
            color: '#fff',
            background: 'linear-gradient(90deg, #818cf8 0%, #fbbf24 100%)',
            borderRadius: 20,
            boxShadow: '0 2px 8px #818cf880',
            textDecoration: 'none',
            marginTop: '12px',
            transition: 'background 0.3s',
          }}>More contact details (ChipMasters)</a>
        </div>
      </div>
      {/* Project Details and Status Section End */}
    </div>
  );
};

export default AboutPage;