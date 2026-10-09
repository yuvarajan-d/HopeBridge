
import { useState } from "react";

const donationAmounts = [100, 500, 1000, 2000];

function Donation() {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [message, setMessage] = useState("");

  const amount = customAmount !== ""
    ? Number(customAmount)
    : selectedAmount;

  function handleDonate(event) {
    event.preventDefault();

    if (!Number.isFinite(amount) || amount < 1) {
      setMessage("Please enter a valid amount of at least ₹1.");
      return;
    }

    if (amount > 1000000) {
      setMessage("Please enter an amount up to ₹10,00,000.");
      return;
    }

    setMessage(
      `Thank you! Your demo donation of ₹${amount.toLocaleString("en-IN")} has been recorded on this page.`
    );
  }

  return (
    <section className="donation-section" id="donate">
      <div className="donation-container">
        <div className="donation-info">
          <p className="eyebrow">YOUR KINDNESS MATTERS</p>

          <h2>
            Give Hope.
            <br />
            <span>Change Lives.</span>
          </h2>

          <p className="donation-description">
            Your support can help provide meals, education, and
            essential resources to people who need them most.
            Every contribution matters.
          </p>

          <div className="donation-promise">
            <span>♥</span>
            <p>
              <strong>Every act of kindness counts.</strong>
              <br />
              Be a part of something meaningful.
            </p>
          </div>
        </div>

        <form className="donation-form" onSubmit={handleDonate}>
          <h3>Make a Donation</h3>
          <p className="form-description">
            Choose an amount to support our causes.
          </p>

          <label className="amount-label">
            Select donation amount
          </label>

          <div className="amount-options">
            {donationAmounts.map((value) => (
              <button
                type="button"
                key={value}
                className={
                  customAmount === "" && selectedAmount === value
                    ? "amount-button selected"
                    : "amount-button"
                }
                aria-pressed={
                  customAmount === "" && selectedAmount === value
                }
                onClick={() => {
                  setSelectedAmount(value);
                  setCustomAmount("");
                  setMessage("");
                }}
              >
                ₹{value.toLocaleString("en-IN")}
              </button>
            ))}
          </div>

          <label className="amount-label" htmlFor="customAmount">
            Or enter a custom amount (₹)
          </label>

          <input
            id="customAmount"
            className="custom-amount"
            type="number"
            min="1"
            max="1000000"
            step="1"
            placeholder="Enter amount"
            value={customAmount}
            onChange={(event) => {
              setCustomAmount(event.target.value);
              setMessage("");
            }}
          />

          <div className="donation-summary">
            <span>Your contribution</span>
            <strong>₹{(Number.isFinite(amount) && amount >= 0
              ? amount
              : 0
            ).toLocaleString("en-IN")}</strong>
          </div>

          <button className="donate-submit" type="submit">
            Donate Now <span>♥</span>
          </button>

          {message && (
            <p className="donation-message" role="status">
              {message}
            </p>
          )}

          <p className="demo-notice">
            Demo only — no real payment will be collected.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Donation;
