# Virtual Store – Stripe-Powered Online Shop

Simple online store with a shopping cart and Stripe Checkout integration.  
Users can browse products, add/remove items from a cart, see a running total, and complete a mock checkout flow.

## Tech Stack

- **Frontend:** HTML, CSS, vanilla JavaScript
- **Backend:** Node.js, Express
- **Payments:** Stripe Checkout API

## Features

- Product grid with images, names, and prices
- Client-side shopping cart:
  - Add items to cart and increase/decrease quantities
  - Remove items from the cart
  - Live cart total calculation
- “Cart” popup overlay with all selected items
- Checkout button that creates a Stripe Checkout session on the server
- Redirect to success or cancel pages after payment flow

## Project Structure

```text
Virtual Store/
  Server/
    Server.js           # Express server + Stripe checkout endpoint
    package.json
    Frontend/
      index.html        # Storefront
      login.html        # (optional) login page
      createAccount.html
      success.html
      cancel.html
      script.js         # Cart logic + checkout call
      style.css         # Main styling
      createAccount.js  # Account form logic
