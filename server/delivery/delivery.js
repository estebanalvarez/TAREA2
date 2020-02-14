/**
 * MODULOS NODE
 */
const port = require('../../config/ports'),
    axios = require('axios'),
    express = require('express'),
    bodyParser = require('body-parser');

/**
 * CONSTANTES Y GLOBALES
 */
const delay = require('../../config/delay').delay,
    app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**
 * PROCESAR ENTREGA
 */
app.post('/delivery', (req, res) => {
    let body = req.body;

    console.log('DELIVERY');
    console.log(body);
    delay(5000);
    console.log('End of delivery....');
    delay(1000);

    axios.post(`http://localhost:${port.RESTAURANT_PORT}/restaurant-c`, {
        data: body.data
    });



    res.status(200).json({
        message: 'End of transaction...'
    });

});



/**
 * SERVICIO DE ENTREGA
 */
app.listen(port.DELIVERY_PORT, () => {
    console.log(`Delivery: port ${port.DELIVERY_PORT}`);
});