import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header animated-header">
        <h1 className="main-title">Web3 CAPTCHA Demo & Guide</h1>
        <p className="intro-text">
          Welcome to our comprehensive demo page! Here you will learn how our innovative Web3 CAPTCHA system works—from frontend interactions and backend processing to on-chain verification.
        </p>
      </header>

      <main>
        {/* Step 1: Initial CAPTCHA Interface */}
        <section className="step animated-step">
          <h2 className="step-title">Step 1: Initial CAPTCHA Interface</h2>
          <p className="step-description">
            <strong>Frontend:</strong> The user is presented with the initial CAPTCHA interface. This page explains the process and guides the user through the verification journey.
            <br /><strong>Backend & On-chain:</strong> No backend interaction occurs at this stage.
          </p>
          <img className="step-image" src="/assets/Screenshots/Screenshot_1.png" alt="Initial CAPTCHA Interface" />
        </section>

        {/* Step 2: Wallet Connecting */}
        <section className="step animated-step">
          <h2 className="step-title">Step 2: Wallet Connecting</h2>
          <p className="step-description">
            <strong>Frontend:</strong> The user is prompted to connect their digital wallet via a sleek, animated button.
            <br /><strong>Backend:</strong> The connection request is sent to a backend service to fetch wallet details.
            <br /><strong>On-chain:</strong> Ensures the wallet is linked before any transactions occur.
          </p>
          <img className="step-image" src="/assets/Screenshots/Screenshot_2.png" alt="Wallet Connecting" />
        </section>

        {/* Step 3: Connected Wallet */}
        <section className="step animated-step">
          <h2 className="step-title">Step 3: Connected Wallet</h2>
          <p className="step-description">
            <strong>Frontend:</strong> The interface updates to display wallet details such as address and balance.
            <br /><strong>Backend:</strong> The backend confirms the connection and performs additional checks.
            <br /><strong>On-chain:</strong> The connection status is logged for transaction verification.
          </p>
          <img className="step-image" src="/assets/Screenshots/Screenshot_3.png" alt="Connected Wallet" />
        </section>

        {/* Step 4: Gesture-Based Drawing */}
        <section className="step animated-step">
          <h2 className="step-title">Step 4: Draw Your Gesture</h2>
          <p className="step-description">
            <strong>Frontend:</strong> The user draws a gesture on a responsive canvas. The drawing interface features smooth animations and interactive feedback.
            <br /><strong>Backend:</strong> The gesture (with its coordinate points and timestamps) is captured and serialized.
            <br /><strong>On-chain:</strong> The gesture data is later used to generate a unique digital signature.
          </p>
          <img className="step-image" src="/assets/Screenshots/Screenshot_4.png" alt="Gesture Drawing Interface" />
        </section>

        {/* Step 5: Reveal & Submit Data with Transaction */}
        <section className="step animated-step">
          <h2 className="step-title">Step 5: Reveal & Submit Data</h2>
          <p className="step-description">
            <strong>Frontend:</strong> After drawing, the user reveals the captured data and submits it via a smooth transition effect.
            <br /><strong>Backend:</strong> The data is serialized, hashed (nonce integrated in high-security mode), and prepared for a blockchain transaction.
            <br /><strong>On-chain:</strong> The hashed data is appended to a transaction, creating an immutable record.
          </p>
          <img className="step-image" src="/assets/Screenshots/Screenshot_5.png" alt="Reveal and Submit Data" />
        </section>

        {/* Step 6: Confirm Transaction */}
        <section className="step animated-step">
          <h2 className="step-title">Step 6: Confirm Transaction</h2>
          <p className="step-description">
            <strong>Frontend:</strong> A confirmation prompt appears, informing the user that verification is in progress.
            <br /><strong>Backend:</strong> The backend monitors the transaction using a commit–reveal protocol.
            <br /><strong>On-chain:</strong> The transaction is broadcast to the blockchain for verification.
          </p>
          <img className="step-image" src="/assets/Screenshots/Screenshot_6.png" alt="Confirm Transaction" />
        </section>

        {/* Step 7: Transaction Confirmed */}
        <section className="step animated-step">
          <h2 className="step-title">Step 7: Transaction Confirmed</h2>
          <p className="step-description">
            <strong>Frontend:</strong> The UI updates with vibrant animations indicating the transaction has been confirmed.
            <br /><strong>Backend:</strong> Transaction details are logged and the verification process is finalized.
            <br /><strong>On-chain:</strong> Confirmation is recorded on-chain, ensuring an immutable audit trail.
          </p>
          <img className="step-image" src="/assets/Screenshots/Screenshot_7.png" alt="Confirmed Transaction" />
        </section>

        {/* Step 8: Testing Environment Example */}
        <section className="step animated-step">
          <h2 className="step-title">Step 8: Testing Environment Example</h2>
          <p className="step-description">
            <strong>Frontend:</strong> A colorful example page demonstrates a sandbox environment for testing.
            <br /><strong>Backend:</strong> Test endpoints simulate transactions and data processing.
            <br /><strong>On-chain:</strong> Developers can safely test on-chain interactions without affecting production.
          </p>
          <img className="step-image" src="/assets/Screenshots/Screenshot_8.png" alt="Testing Environment Example" />
        </section>
      </main>

      <footer className="footer animated-footer">
        <p>© 2025 Divesh Sarkar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
