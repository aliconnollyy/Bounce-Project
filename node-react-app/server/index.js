const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/country/:name', async (req, res) => {
    try {
        // getting country name from request
        const countryName = req.params.name;
        // sending request
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        // country info stored in 'data' variable in json format
        const data = await response.json();
        // sending result back to client
        res.json(data);
    } 
    catch (error)
    {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while making the API call' });
    }
});


// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});