# Cashfree Checkout

Reference project to understand how to build a self hosted [Cashfree](https://www.cashfree.com) checkout page.

For detailed documentation of Cashfree apis visit [Cashfree Docs](https://docs.cashfree.com/docs)

To register as a merchant and create sandbox keys head over to [Merchant Dashboard](https://merchant.cashfree.com)

This is built using [SvelteJS](https://kit.svelte.dev/)

## Preview

Demo at [cashfree-custom-checkout.vercel.app](https://cashfree-custom-checkout.vercel.app/)

|                                        |                                          |
| -------------------------------------- | ---------------------------------------- |
| ![Landing](static/Landing.png)         | ![CheckoutCard](static/CheckoutCard.png) |
| ![CheckoutUPI](static/CheckoutUPI.png) | ![ThankYou](static/ThankYou.png)         |

## Developing

```bash
# install dependencies
npm i

# start the server and open the app in a new browser tab
npm run dev -- --open

# create a production version of your app
npm run build
```
