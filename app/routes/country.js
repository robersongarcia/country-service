const {Router} = require('express');
const { countryGet, countrySetupGet, allCountriesGet } = require('../controllers/country');

const router = Router();

router.get('/', allCountriesGet)

router.get('/setup', countrySetupGet)

router.get('/:id', countryGet)


module.exports = router;