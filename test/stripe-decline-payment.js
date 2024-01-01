/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const chai = require('chai');
const expect = chai.expect;
const stripe = require('stripe')('sk_test_51M2ctlC5sd7OOJiOZZ1c3135nAm2nBieaoyUj7NMwTO9NlHuEb2D7aNsbTijaGKI7foS4u455LHFzNkIhSZGgErA00tGu4588o')



describe('Stripe Declined Payments ', () => {
  describe('Following Use Cases ', () => {
    it('Generic Decline	', async () => {
      try {
        await stripe.paymentIntents.create({
          amount: 500,
          currency: 'gbp',
          confirm: true,
          payment_method: 'pm_card_visa_chargeDeclined',
        });
      } catch (error) {
        expect(error.statusCode).to.equal(402);
        expect(error.code).to.be.equal('card_declined')
        expect(error.decline_code).to.be.equal('generic_decline')
      }
    });

    it('Insufficient Funds Decline', async () => {
      try {
        await stripe.paymentIntents.create({
          amount: 500,
          currency: 'gbp',
          confirm: true,
          payment_method: 'pm_card_visa_chargeDeclinedInsufficientFunds',
        });
      } catch (error) {
        expect(error.statusCode).to.equal(402);
        expect(error.code).to.be.equal('card_declined')
        expect(error.decline_code).to.be.equal('insufficient_funds')
      }
    });

    it('Lost Card Decline', async () => {
      try {
        await stripe.paymentIntents.create({
          amount: 500,
          currency: 'gbp',
          confirm: true,
          payment_method: 'pm_card_visa_chargeDeclinedLostCard',
        });
      } catch (error) {
        expect(error.statusCode).to.equal(402);
        expect(error.code).to.be.equal('card_declined')
        expect(error.decline_code).to.be.equal('lost_card')
      }
    });

    it('Stolen Card Decline', async () => {
      try {
        await stripe.paymentIntents.create({
          amount: 500,
          currency: 'gbp',
          confirm: true,
          payment_method: 'pm_card_visa_chargeDeclinedStolenCard',
        });
      } catch (error) {
        expect(error.statusCode).to.equal(402);
        expect(error.code).to.be.equal('card_declined')
        expect(error.decline_code).to.be.equal('stolen_card')
      }
    });

    it('Expired Card Decline', async () => {
      try {
        await stripe.paymentIntents.create({
          amount: 500,
          currency: 'gbp',
          confirm: true,
          payment_method: 'pm_card_chargeDeclinedExpiredCard',
        });
      } catch (error) {
        expect(error.statusCode).to.equal(402);
        expect(error.code).to.be.equal('expired_card')
      }
    });

    // add more decline payments method cases

  });


});

