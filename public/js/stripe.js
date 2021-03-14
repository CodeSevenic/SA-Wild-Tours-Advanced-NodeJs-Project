import axios from 'axios';
import { showAlert } from './alerts';
// import Stripe from 'stripe';
const stripe = Stripe(
  'pk_test_51IU7vtLcJ7yMinMLbXQtAwOZTyg2qBCWBzAyUBPsGixVN1pKfGMh5ZCmToswmup2coSKkXyL73GitH4D5KFJS9HS00u8Kubuyl'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
