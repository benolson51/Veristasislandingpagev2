import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  Database, 
  Network, 
  KeyRound, 
  GlobeLock, 
  Settings2,
  ArrowRight,
  Server,
  Lock,
  FileKey2
} from 'lucide-react';
import './index.css';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="feature-card">
    <div className="feature-icon-wrapper">
      <Icon />
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-desc">{description}</p>
  </div>
);

function App() {
  // Simple intersection observer for scroll animations if needed, though we use CSS animations primarily
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-grid"></div>
      
      {/* Hero Section */}
      <section className="hero container">
        <h1 className="hero-title">
          Veristasis: The Compliance-as-a-Service<br />Platform for the Defense Industrial Base
        </h1>
        <p className="hero-subtitle">
          Engineered for mission-critical operations with <span>CNSA 2.0 and FIPS-Valid Cryptography</span>.
        </p>
        <button className="btn btn-primary">
          Request Demo <ArrowRight style={{ marginLeft: '8px', width: '20px', height: '20px' }} />
        </button>
      </section>

      {/* Data Pipeline Visualization */}
      <section className="pipeline-section container">
        <h2 className="pipeline-title">Assured Data Pipeline Architecture</h2>
        <div className="pipeline-container">
          <div className="pipeline-track">
            <div className="pipeline-line-active"></div>
            
            <div className="pipeline-gate">
              <Server />
              <span className="pipeline-label">Ingress & Auth</span>
            </div>
            
            <div className="pipeline-gate">
              <ShieldCheck />
              <span className="pipeline-label">GIL-Bypass Inspection</span>
            </div>
            
            <div className="pipeline-gate">
              <Lock />
              <span className="pipeline-label">FIPS Crypto Engine</span>
            </div>
            
            <div className="pipeline-gate">
              <FileKey2 />
              <span className="pipeline-label">Zero-Knowledge Vault</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Pillars Section */}
      <section className="features container">
        <h2 className="section-title">Core Technical Pillars</h2>
        <div className="features-grid">
          <FeatureCard 
            icon={FileKey2}
            title="Zero-Knowledge ITAR Evidence Vault"
            description="Cryptographically guaranteed compartmentalization of International Traffic in Arms Regulations (ITAR) controlled technical data, ensuring zero exposure to unauthorized entities."
          />
          <FeatureCard 
            icon={Database}
            title="Global Row-Level Security"
            description="Enforce fine-grained access control policies globally across all datasets, ensuring personnel only access data explicitly authorized for their clearance."
          />
          <FeatureCard 
            icon={Network}
            title="GIL-Bypass Architecture"
            description="Maximize throughput and minimize latency utilizing advanced Global Interpreter Lock bypass techniques, specifically designed for high-performance security operations."
          />
          <FeatureCard 
            icon={KeyRound}
            title="AAL3 Authentication (FIDO2/PIV)"
            description="Authenticator Assurance Level 3 compliance out of the box. Native support for cryptographic hardware tokens including FIDO2 and PIV cards for sovereign identity verification."
          />
          <FeatureCard 
            icon={GlobeLock}
            title="US Sovereign Assured Workloads"
            description="Strictly geographically fenced compute and storage environments meeting stringent US sovereign data residency and operational constraints."
          />
          <FeatureCard 
            icon={Settings2}
            title="NIST 800-171 Configuration Management"
            description="Automated baseline enforcement and continuous drift detection mapped directly to NIST 800-171 controls to maintain uninterrupted CMMC readiness."
          />
        </div>
      </section>
    </>
  );
}

export default App;
