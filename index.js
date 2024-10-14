require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require('./routes')
const dbConnection = require("./config/connection");
const Stripe = require('stripe');
const Shipment = require('./models/shipment');

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3006;

app.use('/api/v1', routes)


const stripe = Stripe('sk_test_51Pvl1fP8iJx3cEeteK9jGDaHc9YPdFNZ4Pz0zBX2bmE0fWWg0Yy0Hgp57ARDH9Gmuo8Fv430RH4CK8Hk38n7ZJ9Y00yKwcadq6');
app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // amount in cents
      currency: currency || 'usd',
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/shipment', async (req, res) => {



  try {
    const newBooking = new Shipment(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: savedBooking,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


dbConnection()
  .then((result) => {
    if (result) {
      app.listen(port, () => {
        console.log(`Server is running on PORT ${port}`);
      });
    }
  })
  .catch(() => {
    console.error(`Failed to connect with database`);
    process.exit(1);
  });
