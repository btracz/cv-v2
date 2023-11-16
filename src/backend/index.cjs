/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const axios = require("axios");
const { sendContactMails } = require("./mailer.cjs");
const port = process.env.PORT || 3000;

//enabling cors
app.use(cors());

//Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// build files (frontend)
app.use(express.static("dist"));
//add router in express app
app.use("/api", router);

//POST route
router.post("/contact", async (req, res) => {
  ////Destructuring response token and input field value from request body
  const { token, from_name, from_email, message } = req.body;

  try {
    // Sending secret key and response token to Google Recaptcha API for authentication.
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=6LcWxBEpAAAAAARRp_3ifk5YSmUh077YP4m_jYbW&response=${token}`
    );

    // Check response status and send back to the client-side
    if (response.data.success) {
      await sendContactMails({
        name: from_name,
        mail: from_email,
        body: message,
      });

      res.send("Done");
    } else {
      res.status(400).send("Robot 🤖");
    }
  } catch (error) {
    // Handle any errors that occur during the reCAPTCHA verification process
    console.error(error);
    res.status(500).send("Error verifying reCAPTCHA");
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
