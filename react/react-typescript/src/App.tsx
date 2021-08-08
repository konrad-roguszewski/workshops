import { useState } from 'react';

// Details
// Shipping
// Payment

// type CheckoutStep = "Details" | "Shipping" | "Payment";

enum CheckoutStep {
  Details = "Details",
  Shipping = "Shipping",
  Payment = "Payment"
}

export default function App() {
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>(CheckoutStep.Details);

  return (
    <>
      {checkoutStep === CheckoutStep.Details && (
        <>
          <h1>Details</h1>
          <button type="button" onClick={() => setCheckoutStep(CheckoutStep.Shipping)}>
            Next
          </button>
        </>
      )}

      {checkoutStep === 'Shipping' && (
        <>
          <h1>Shipping</h1>
          <button type="button" onClick={() => setCheckoutStep(CheckoutStep.Payment)}>
            Next
          </button>
        </>
      )}

      {checkoutStep === 'Payment' && (
        <>
          <h1>Payment</h1>
        </>
      )}
    </>
  );
}
