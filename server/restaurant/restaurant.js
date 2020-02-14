/**
 * MODULOS NODE
 */
const axios = require('axios'),
    express = require('express'),
    bodyParser = require('body-parser');

/**
 * CONSTANTES Y GLOBALES
 */
const port = require('../../config/ports'),
    delay = require('../../config/delay').delay,
    app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



/**
 * PROCESAR ORDEN
 */
app.post('/restaurant', (req, res) => {
    let body = req.body;

    console.log('RESTAURANT');
    console.log(body);
    console.log('Processing order...');
    delay(5000);
    console.log('Start delivery..');

    axios.post(`http://localhost:${port.DELIVERY_PORT}/delivery`, {
        data: body.data
    });

    res.status(200).json({
        message: 'End of transaction...'
    });

});

/**
 * ENTREGA COMPLETA
 */
app.post('/restaurant-c', (req, res) => {
    let body = req.body;
    console.log(body);

    console.log('End of delivery...');

    delay(2000);

    axios.post(`http://localhost:${port.CLIENT_PORT}/client`, {
        data: body.data
    });

    res.status(200).json({
        message: 'End of transaction...'
    });
});


/**
 * SERVICIO DE RESTAURANTE
 */
app.listen(port.RESTAURANT_PORT, () => {
    console.log(`Restaurant: port ${port.RESTAURANT_PORT}`);
});