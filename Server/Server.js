const express = require('express');
const cors = require('cors')
const path = require('path');
const { exec } = require('child_process');
const app = express();
const stripe = require('stripe')('key');

app.use(express.json());

app.use(cors({origin: "https://localhost:5500",}))

app.use('/frontend', express.static(path.join(__dirname, 'Frontend')));

app.post('/create-checkout-session', async (req, res) => {
    try {
        console.log('Request received:', req.body);
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.cart.map(item => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [item.image]
                    },
                    unit_amount: item.price * 100, 
                },
                quantity: item.quantity,
            })),
            success_url: 'http://localhost:3002/frontend/success.html',
            cancel_url: 'http://localhost:3002/frontend/cancel.html',
        });

        console.log(session);
        res.json({ url: session.url });
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'index.html'));
});

app.listen(3002, () => {
    console.log('Server is running on port 3002');
    exec('start http://localhost:3002/frontend/createAccount.html');
});