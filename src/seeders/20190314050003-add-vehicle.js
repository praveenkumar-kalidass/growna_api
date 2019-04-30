'use strict';
const uuidv4 = require('uuid/v4');
const constant = require('../utils/constant');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Vehicle', [{
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'Caponord',
      'variant': 'Caponord 1200',
      'engine_cc': '1197',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'Dorsoduro',
      'variant': 'Dorsoduro 1200',
      'engine_cc': '1197',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'Dorsoduro',
      'variant': 'Dorsoduro 750',
      'engine_cc': '749',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'Habana',
      'variant': 'Habana',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'Leonardo',
      'variant': 'Leonardo',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'Mana',
      'variant': 'Mana 850',
      'engine_cc': '839',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'Mana',
      'variant': 'Mana 850 GT',
      'engine_cc': '839',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'RS4',
      'variant': 'RS4',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'RS4',
      'variant': 'RS4 50 Replica',
      'engine_cc': '49',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'RSV4',
      'variant': 'RSV4',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'RSV4',
      'variant': 'RSV4 R',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'RSV4',
      'variant': 'RSV4 RF',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'RSV4',
      'variant': 'RSV4 RR',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'Scarbed',
      'variant': 'Scarbed',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'Shiver',
      'variant': 'Shiver 750',
      'engine_cc': '749',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'Sonic',
      'variant': 'Sonic 50',
      'engine_cc': '50',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'SR',
      'variant': 'SR 50',
      'engine_cc': '50',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'SR',
      'variant': 'SR 125',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'SR',
      'variant': 'SR 150',
      'engine_cc': '154',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'SR',
      'variant': 'SR Max 300',
      'engine_cc': '278',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'SR',
      'variant': 'SR Motard 50',
      'engine_cc': '49',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'SRV',
      'variant': 'SRV 850',
      'engine_cc': '839',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'Tuono',
      'variant': 'Tuono',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Aprilia',
      'model': 'Tuono',
      'variant': 'Tuono V4 R',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Aspire',
      'variant': 'Aspire 100',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Aspire',
      'variant': 'Aspire 110',
      'engine_cc': '112',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Avenger',
      'variant': 'Avenger 150',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Avenger',
      'variant': 'Avenger 180',
      'engine_cc': '179',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Avenger',
      'variant': 'Avenger 200',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Avenger',
      'variant': 'Avenger 220',
      'engine_cc': '220',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Avenger',
      'variant': 'Avenger 400',
      'engine_cc': '373',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Blade',
      'variant': 'Blade',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Boxer',
      'variant': 'Boxer 100',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Boxer',
      'variant': 'Boxer 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Boxer',
      'variant': 'Boxer 150',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Boxer',
      'variant': 'Boxer BM 150',
      'engine_cc': '144',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Bravo',
      'variant': 'Bravo',
      'engine_cc': '145',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'BYK',
      'variant': 'BYK',
      'engine_cc': '92',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Caliber',
      'variant': 'Caliber',
      'engine_cc': '112',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Champion',
      'variant': 'Champion',
      'engine_cc': '144',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Chetak',
      'variant': 'Chetak 2-Stroke',
      'engine_cc': '145',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Chetak',
      'variant': 'Chetak 4-Stroke',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Classic',
      'variant': 'Classic SL',
      'engine_cc': '146',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'CT',
      'variant': 'CT 100',
      'engine_cc': '99',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Cub',
      'variant': 'Cub',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 100',
      'engine_cc': '94',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 100 4G',
      'engine_cc': '94',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 100 5G',
      'engine_cc': '94',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 100 DTSi',
      'engine_cc': '94',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 100M',
      'engine_cc': '102',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 100T',
      'engine_cc': '102',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 110',
      'engine_cc': '112',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 125',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 125 DTSi',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 125M',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 125ST',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 125T',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 135',
      'engine_cc': '134',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 150',
      'engine_cc': '145',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 150F',
      'engine_cc': '145',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 150S',
      'engine_cc': '145',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Discover',
      'variant': 'Discover 180',
      'engine_cc': '180',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Eliminator',
      'variant': 'Eliminator',
      'engine_cc': '174',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'KB',
      'variant': 'KB 100',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'KB',
      'variant': 'KB 100 RTZ',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'KB',
      'variant': 'KB 125',
      'engine_cc': '123',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Kratos',
      'variant': 'Kratos',
      'engine_cc': '373',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Kratos',
      'variant': 'Kratos VS400',
      'engine_cc': '373',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Kristal',
      'variant': 'Kristal',
      'engine_cc': '95',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Legend',
      'variant': 'Legend',
      'engine_cc': '145',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'M80',
      'variant': 'M80',
      'engine_cc': '74',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Platina',
      'variant': 'Platina 100',
      'engine_cc': '102',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Platina',
      'variant': 'Platina 100 ComforTec',
      'engine_cc': '102',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Platina',
      'variant': 'Platina 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Priya',
      'variant': 'Priya 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Priya',
      'variant': 'Priya 150',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Prowler',
      'variant': 'Prowler',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 135',
      'engine_cc': '135',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 135 LS',
      'engine_cc': '135',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 150',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 150 AS',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 150 NS',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 150 UG',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 180',
      'engine_cc': '179',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 180 AS',
      'engine_cc': '179',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 180 NS',
      'engine_cc': '179',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 200',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 200 AS',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 200 CS',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 200 DTS-i',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 200 NS',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 200 NS Fi',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 200 RS',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 220',
      'engine_cc': '220',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 220 DTS-Fi',
      'engine_cc': '220',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 220F',
      'engine_cc': '220',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 220S',
      'engine_cc': '220',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 250',
      'engine_cc': '250',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 400',
      'engine_cc': '373',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 400 RS',
      'engine_cc': '373',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 400 SS',
      'engine_cc': '373',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Pulsar',
      'variant': 'Pulsar 400 VS',
      'engine_cc': '373',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Rave',
      'variant': 'Rave',
      'engine_cc': '75',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'RTZ',
      'variant': 'RTZ',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Saffire',
      'variant': 'Saffire',
      'engine_cc': '93',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Sonic',
      'variant': 'Sonic',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Spirit',
      'variant': 'Spirit',
      'engine_cc': '60',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Stride',
      'variant': 'Stride',
      'engine_cc': '145',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Sunny',
      'variant': 'Sunny',
      'engine_cc': '60',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Super',
      'variant': 'Super',
      'engine_cc': '146',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Super',
      'variant': 'Super Excel',
      'engine_cc': '146',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'V',
      'variant': 'V',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'V15',
      'variant': 'V15',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Wave',
      'variant': 'Wave',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'Wind',
      'variant': 'Wind',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'XCD',
      'variant': 'XCD 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'XCD',
      'variant': 'XCD 135',
      'engine_cc': '135',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Bajaj',
      'model': 'XCD',
      'variant': 'XCD 150',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'BN',
      'variant': 'BN',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'BX',
      'variant': 'BX',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'BX',
      'variant': 'BX Motard',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'Caffenero',
      'variant': 'Caffenero',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'Leoncino',
      'variant': 'Leoncino',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'Leoncino',
      'variant': 'Leoncino Scrambler',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'TNT',
      'variant': 'TNT 1130 R',
      'engine_cc': '1131',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'TNT',
      'variant': 'TNT 15',
      'engine_cc': '148',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'TNT',
      'variant': 'TNT 25',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'TNT',
      'variant': 'TNT 300',
      'engine_cc': '300',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'TNT',
      'variant': 'TNT 600 GT',
      'engine_cc': '600',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'TNT',
      'variant': 'TNT 600i',
      'engine_cc': '600',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'TNT',
      'variant': 'TNT 899',
      'engine_cc': '898',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'Tornado',
      'variant': 'Tornado 302R',
      'engine_cc': '300',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'Tornado',
      'variant': 'Tornado Naked T 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'Tornado',
      'variant': 'Tornado Naked T 135',
      'engine_cc': '135',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'TreK',
      'variant': 'TreK',
      'engine_cc': '1131',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'TreK',
      'variant': 'TreK Amazonas 1130',
      'engine_cc': '1131',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'TRK',
      'variant': 'TRK',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Benelli',
      'model': 'TRK',
      'variant': 'TRK 502',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'F',
      'variant': 'F 650 GS',
      'engine_cc': '652',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'G',
      'variant': 'G 650 GS',
      'engine_cc': '652',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'G310',
      'variant': 'G310 R',
      'engine_cc': '313',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'HP2',
      'variant': 'HP2',
      'engine_cc': '1170',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'K',
      'variant': 'K 1200 LT',
      'engine_cc': '1172',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'K',
      'variant': 'K 1300 GT',
      'engine_cc': '1293',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'K1300',
      'variant': 'K1300 R',
      'engine_cc': '1293',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'K1300',
      'variant': 'K1300 S',
      'engine_cc': '1293',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'K1600',
      'variant': 'K1600 GT',
      'engine_cc': '1649',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'K1600',
      'variant': 'K1600 GTL',
      'engine_cc': '1649',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'R1200',
      'variant': 'R1200 GS',
      'engine_cc': '1170',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'R1200',
      'variant': 'R1200 GS Adventure',
      'engine_cc': '1170',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'R1200',
      'variant': 'R1200 R',
      'engine_cc': '1170',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'R1200',
      'variant': 'R1200 RT',
      'engine_cc': '1170',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'S1000',
      'variant': 'S1000 R',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'S1000',
      'variant': 'S1000 RR',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'BMW',
      'model': 'S1000',
      'variant': 'S1000 XR',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Desmosedici',
      'variant': 'Desmosedici',
      'engine_cc': '989',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Diavel',
      'variant': 'Diavel',
      'engine_cc': '1198',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'GT',
      'variant': 'GT',
      'engine_cc': '992',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Hypermotard',
      'variant': 'Hypermotard',
      'engine_cc': '821',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Hypermotard',
      'variant': 'Hypermotard 1100',
      'engine_cc': '1078',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Hypermotard',
      'variant': 'Hypermotard 1100 EVO',
      'engine_cc': '1078',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Hypermotard',
      'variant': 'Hypermotard 1100 EVO SP',
      'engine_cc': '1078',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Hypermotard',
      'variant': 'Hypermotard 1100 S',
      'engine_cc': '1078',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Hypermotard',
      'variant': 'Hypermotard 796',
      'engine_cc': '803',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Hypermotard',
      'variant': 'Hypermotard 939',
      'engine_cc': '937',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Hypermotard',
      'variant': 'Hypermotard 939 SP',
      'engine_cc': '937',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Hypermotard',
      'variant': 'Hypermotard SP',
      'engine_cc': '821',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Hyperstrada',
      'variant': 'Hyperstrada',
      'engine_cc': '821',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Hyperstrada',
      'variant': 'Hyperstrada 939',
      'engine_cc': '937',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Monster',
      'variant': 'Monster 1100',
      'engine_cc': '1078',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Monster',
      'variant': 'Monster 1100 EVO',
      'engine_cc': '1078',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Monster',
      'variant': 'Monster 1100 S',
      'engine_cc': '1078',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Monster',
      'variant': 'Monster 1200',
      'engine_cc': '1198',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Monster',
      'variant': 'Monster 1200 R',
      'engine_cc': '1198',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Monster',
      'variant': 'Monster 1200 S',
      'engine_cc': '1198',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Monster',
      'variant': 'Monster 696',
      'engine_cc': '696',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Monster',
      'variant': 'Monster 795',
      'engine_cc': '803',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Monster',
      'variant': 'Monster 796',
      'engine_cc': '803',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Monster',
      'variant': 'Monster 821',
      'engine_cc': '821',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Monster',
      'variant': 'Monster 996',
      'engine_cc': '996',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Monster',
      'variant': 'Monster Diesel',
      'engine_cc': '1078',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Multistrada',
      'variant': 'Multistrada 1200',
      'engine_cc': '1198',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Panigale',
      'variant': 'Panigale 1299',
      'engine_cc': '1285',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Panigale',
      'variant': 'Panigale 899',
      'engine_cc': '898',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Panigale',
      'variant': 'Panigale 959',
      'engine_cc': '955',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Panigale',
      'variant': 'Panigale R',
      'engine_cc': '1198',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Scrambler',
      'variant': 'Scrambler',
      'engine_cc': '803',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Scrambler',
      'variant': 'Scrambler Sixty2',
      'engine_cc': '399',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Sportclassic',
      'variant': 'Sportclassic',
      'engine_cc': '992',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Sportclassic',
      'variant': 'Sportclassic 1000 S',
      'engine_cc': '992',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Streetfighter',
      'variant': 'Streetfighter',
      'engine_cc': '1099',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Streetfighter',
      'variant': 'Streetfighter 848',
      'engine_cc': '849',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Streetfighter',
      'variant': 'Streetfighter S',
      'engine_cc': '1099',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Superbike',
      'variant': 'Superbike 1198',
      'engine_cc': '1099',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Superbike',
      'variant': 'Superbike 1198 S',
      'engine_cc': '1099',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Superbike',
      'variant': 'Superbike 1198 SP',
      'engine_cc': '1099',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Superbike',
      'variant': 'Superbike 848',
      'engine_cc': '849',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'Superbike',
      'variant': 'Superbike 848 EVO',
      'engine_cc': '849',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Ducati',
      'model': 'XDiavel',
      'variant': 'XDiavel',
      'engine_cc': '1262',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'FAB Regal Raptor',
      'model': 'Bobber',
      'variant': 'Bobber',
      'engine_cc': '320',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'FAB Regal Raptor',
      'model': 'Cruiser',
      'variant': 'Cruiser',
      'engine_cc': '320',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'FAB Regal Raptor',
      'model': 'Daytona',
      'variant': 'Daytona',
      'engine_cc': '320',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Global Auto',
      'model': 'Auto',
      'variant': 'Auto Rock',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Global Auto',
      'model': 'Auto',
      'variant': 'Auto UFO',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Global Auto',
      'model': 'Auto',
      'variant': 'Auto Xpression',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': '1200',
      'variant': '1200 Custom',
      'engine_cc': '1202',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': '1200',
      'variant': '1200 Sportster',
      'engine_cc': '1202',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': '883',
      'variant': '883 Roadster',
      'engine_cc': '883',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': '883',
      'variant': '883 Sportster',
      'engine_cc': '883',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Blackline',
      'variant': 'Blackline',
      'engine_cc': '1687',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Breakout',
      'variant': 'Breakout',
      'engine_cc': '1690',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'CVO',
      'variant': 'CVO',
      'engine_cc': '1802',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Dyna',
      'variant': 'Dyna',
      'engine_cc': '1585',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Electra',
      'variant': 'Electra Glide',
      'engine_cc': '1803',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Fat',
      'variant': 'Fat Bob',
      'engine_cc': '1585',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Fat',
      'variant': 'Fat Boy',
      'engine_cc': '1690',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Forty-Eight',
      'variant': 'Forty-Eight',
      'engine_cc': '1202',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Heritage',
      'variant': 'Heritage Classic',
      'engine_cc': '1690',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Iron',
      'variant': 'Iron 883',
      'engine_cc': '883',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Night',
      'variant': 'Night Rod',
      'engine_cc': '1247',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Nightster',
      'variant': 'Nightster',
      'engine_cc': '1202',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Road',
      'variant': 'Road King',
      'engine_cc': '1690',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Roadster',
      'variant': 'Roadster XL 1200 CX',
      'engine_cc': '1202',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Seventy-Two',
      'variant': 'Seventy-Two',
      'engine_cc': '1202',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Softail',
      'variant': 'Softail Slim',
      'engine_cc': '1690',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Sportster',
      'variant': 'Sportster 1200',
      'engine_cc': '1202',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Street',
      'variant': 'Street 500',
      'engine_cc': '494',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Street',
      'variant': 'Street 750',
      'engine_cc': '749',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Street',
      'variant': 'Street Bob',
      'engine_cc': '1585',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Street',
      'variant': 'Street Glide',
      'engine_cc': '1687',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Street',
      'variant': 'Street Glide 750',
      'engine_cc': '750',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Super',
      'variant': 'Super Glide',
      'engine_cc': '1585',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Superlow',
      'variant': 'Superlow',
      'engine_cc': '883',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Switchback',
      'variant': 'Switchback',
      'engine_cc': '1585',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'V-Muscle',
      'variant': 'V-Muscle',
      'engine_cc': '1250',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'VRSC',
      'variant': 'VRSC',
      'engine_cc': '1247',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'Wide',
      'variant': 'Wide Glide',
      'engine_cc': '1585',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Harley Davidson',
      'model': 'XR',
      'variant': 'XR 1200 X',
      'engine_cc': '1202',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Achiever',
      'variant': 'Achiever 150',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Ambition',
      'variant': 'Ambition',
      'engine_cc': '133',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'CBZ',
      'variant': 'CBZ',
      'engine_cc': '157',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'CBZ',
      'variant': 'CBZ Star',
      'engine_cc': '157',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'CBZ',
      'variant': 'CBZ X-Treme',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'CD',
      'variant': 'CD 100',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'CD',
      'variant': 'CD 100 SS',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'CD',
      'variant': 'CD Dawn',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'CD',
      'variant': 'CD Deluxe',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Dare',
      'variant': 'Dare',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Dash',
      'variant': 'Dash',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Dewlet',
      'variant': 'Dewlet',
      'engine_cc': '111',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Duet',
      'variant': 'Duet LX',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Duet',
      'variant': 'Duet VX',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Effy',
      'variant': 'Effy',
      'engine_cc': '72',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Ezee',
      'variant': 'Ezee',
      'engine_cc': '74',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Ezee',
      'variant': 'Ezee SX',
      'engine_cc': '74',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Gizmo',
      'variant': 'Gizmo',
      'engine_cc': '72',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Glamour',
      'variant': 'Glamour 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Glamour',
      'variant': 'Glamour Fi',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Hastur',
      'variant': 'Hastur',
      'engine_cc': '620',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'HF',
      'variant': 'HF Dawn',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'HF',
      'variant': 'HF Deluxe',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'HF',
      'variant': 'HF Deluxe ECO',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Hunk',
      'variant': 'Hunk',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'HX250R',
      'variant': 'HX250R',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Ignitor',
      'variant': 'Ignitor',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Impulse',
      'variant': 'Impulse',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Joy',
      'variant': 'Joy',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Karizma',
      'variant': 'Karizma',
      'engine_cc': '223',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Karizma',
      'variant': 'Karizma R',
      'engine_cc': '223',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Karizma',
      'variant': 'Karizma ZMR',
      'engine_cc': '223',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Leap',
      'variant': 'Leap',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Maestro',
      'variant': 'Maestro',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Maestro',
      'variant': 'Maestro Edge',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Panther',
      'variant': 'Panther 60',
      'engine_cc': '60',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Panther',
      'variant': 'Panther 70',
      'engine_cc': '70',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Passion',
      'variant': 'Passion',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Passion',
      'variant': 'Passion Plus',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Passion',
      'variant': 'Passion Pro',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Passion',
      'variant': 'Passion Pro TR',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Passion',
      'variant': 'Passion xPro',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Pleasure',
      'variant': 'Pleasure',
      'engine_cc': '102',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Power',
      'variant': 'Power',
      'engine_cc': '70',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Puch',
      'variant': 'Puch',
      'engine_cc': '64',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'RNT',
      'variant': 'RNT Diesel',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Sleek',
      'variant': 'Sleek',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Splendor',
      'variant': 'Splendor',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Splendor',
      'variant': 'Splendor iSmart',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Splendor',
      'variant': 'Splendor iSmart 110',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Splendor',
      'variant': 'Splendor NXG',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Splendor',
      'variant': 'Splendor Plus',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Splendor',
      'variant': 'Splendor Pro',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Stallion',
      'variant': 'Stallion',
      'engine_cc': '72',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Stepmatic',
      'variant': 'Stepmatic',
      'engine_cc': '50',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Sting',
      'variant': 'Sting',
      'engine_cc': '92',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Street',
      'variant': 'Street 100',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Student',
      'variant': 'Student',
      'engine_cc': '60',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Super',
      'variant': 'Super Splendor',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'XF3R',
      'variant': 'XF3R',
      'engine_cc': '300',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Xtreme',
      'variant': 'Xtreme',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Xtreme',
      'variant': 'Xtreme 200S',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'Xtreme',
      'variant': 'Xtreme Sports',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero',
      'model': 'ZIR',
      'variant': 'ZIR',
      'engine_cc': '157',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Achiever',
      'variant': 'Achiever 150',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Ambition',
      'variant': 'Ambition',
      'engine_cc': '133',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'CBZ',
      'variant': 'CBZ',
      'engine_cc': '157',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'CBZ',
      'variant': 'CBZ Star',
      'engine_cc': '157',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'CBZ',
      'variant': 'CBZ X-Treme',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'CD',
      'variant': 'CD 100',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'CD',
      'variant': 'CD 100 SS',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'CD',
      'variant': 'CD Dawn',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'CD',
      'variant': 'CD Deluxe',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Glamour',
      'variant': 'Glamour 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Glamour',
      'variant': 'Glamour Fi',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Hunk',
      'variant': 'Hunk',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Joy',
      'variant': 'Joy',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Karizma',
      'variant': 'Karizma',
      'engine_cc': '223',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Karizma',
      'variant': 'Karizma R',
      'engine_cc': '223',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Karizma',
      'variant': 'Karizma ZMR',
      'engine_cc': '223',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Passion',
      'variant': 'Passion',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Passion',
      'variant': 'Passion Plus',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Passion',
      'variant': 'Passion Pro',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Passion',
      'variant': 'Passion Pro TR',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Passion',
      'variant': 'Passion xPro',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Pleasure',
      'variant': 'Pleasure',
      'engine_cc': '102',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Sleek',
      'variant': 'Sleek',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Splendor',
      'variant': 'Splendor',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Splendor',
      'variant': 'Splendor iSmart',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Splendor',
      'variant': 'Splendor iSmart 110',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Splendor',
      'variant': 'Splendor NXG',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Splendor',
      'variant': 'Splendor Plus',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Splendor',
      'variant': 'Splendor Pro',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Street',
      'variant': 'Street 100',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hero Honda',
      'model': 'Super',
      'variant': 'Super Splendor',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Activa',
      'variant': 'Activa 100',
      'engine_cc': '102',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Activa',
      'variant': 'Activa 110',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Activa',
      'variant': 'Activa 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Activa',
      'variant': 'Activa 125 Deluxe',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Activa',
      'variant': 'Activa 3G',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Activa-i',
      'variant': 'Activa-i 110',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Activa-i',
      'variant': 'Activa-i DLX',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Aviator',
      'variant': 'Aviator 100',
      'engine_cc': '102',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Aviator',
      'variant': 'Aviator 110',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB 1000 R',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB 125F',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB 150R',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB 150R Streetfire',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB 250R',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB 250R Streetfire',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB 300F',
      'engine_cc': '286',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB 400F',
      'engine_cc': '399',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB 400X',
      'engine_cc': '399',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB 500F',
      'engine_cc': '471',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB 500X',
      'engine_cc': '471',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB 600F',
      'engine_cc': '599',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB Hornet 160R',
      'engine_cc': '162',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB Shine',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB Shine DX',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB Shine SP',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB Trigger',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB Twister',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB Unicorn 150',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB Unicorn 160',
      'engine_cc': '163',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CB',
      'variant': 'CB Unicorn Dazzler',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBF',
      'variant': 'CBF 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBF',
      'variant': 'CBF 150',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBF',
      'variant': 'CBF Stunner',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBF',
      'variant': 'CBF Stunner PGM-Fi',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 1000RR',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 125R',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 150',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 150R',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 250R',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 250RR',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 300R',
      'engine_cc': '286',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 400R',
      'engine_cc': '399',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 500R',
      'engine_cc': '471',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 600F',
      'engine_cc': '599',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 600R',
      'engine_cc': '599',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 600RR',
      'engine_cc': '599',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 650F',
      'engine_cc': '649',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBR',
      'variant': 'CBR 929RR',
      'engine_cc': '929',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CBX',
      'variant': 'CBX 250',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CD',
      'variant': 'CD Dream',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CRF',
      'variant': 'CRF 1000',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CRF',
      'variant': 'CRF 250',
      'engine_cc': '250',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'CX-01',
      'variant': 'CX-01',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Dio',
      'variant': 'Dio 100',
      'engine_cc': '102',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Dio',
      'variant': 'Dio 110',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Dream',
      'variant': 'Dream Neo',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Dream',
      'variant': 'Dream Yuga',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Eterno',
      'variant': 'Eterno 100',
      'engine_cc': '102',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Eterno',
      'variant': 'Eterno 150',
      'engine_cc': '147',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Fury',
      'variant': 'Fury',
      'engine_cc': '1312',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Gold',
      'variant': 'Gold Wing',
      'engine_cc': '1832',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Hornet',
      'variant': 'Hornet 160R',
      'engine_cc': '162',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Hornet',
      'variant': 'Hornet 900',
      'engine_cc': '901',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Interceptor',
      'variant': 'Interceptor',
      'engine_cc': '782',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Interceptor',
      'variant': 'Interceptor VFR800F',
      'engine_cc': '782',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Lead',
      'variant': 'Lead 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Livo',
      'variant': 'Livo 110',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Metropolitan',
      'variant': 'Metropolitan 50',
      'engine_cc': '49',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'MSX',
      'variant': 'MSX 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Navi',
      'variant': 'Navi 110',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Neo',
      'variant': 'Neo',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'NXR',
      'variant': 'NXR',
      'engine_cc': '162',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'PCX',
      'variant': 'PCX 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'PCX',
      'variant': 'PCX 150',
      'engine_cc': '153',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'RC',
      'variant': 'RC',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'RC',
      'variant': 'RC 213V-S',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'SCV',
      'variant': 'SCV 100',
      'engine_cc': '102',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'SFA',
      'variant': 'SFA 150',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Shine',
      'variant': 'Shine 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Unicorn',
      'variant': 'Unicorn',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'VFR',
      'variant': 'VFR 1200F',
      'engine_cc': '1237',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'Vision',
      'variant': 'Vision 110',
      'engine_cc': '108',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'VT',
      'variant': 'VT 1300 CX',
      'engine_cc': '1312',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Honda',
      'model': 'VTR',
      'variant': 'VTR 250',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hyosung',
      'model': 'Aquila',
      'variant': 'Aquila',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hyosung',
      'model': 'GT',
      'variant': 'GT 250R',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hyosung',
      'model': 'GT',
      'variant': 'GT 650',
      'engine_cc': '647',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hyosung',
      'model': 'GT',
      'variant': 'GT 650R',
      'engine_cc': '647',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hyosung',
      'model': 'GV',
      'variant': 'GV 250 Aquila',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hyosung',
      'model': 'GV',
      'variant': 'GV 650 Aquila Pro',
      'engine_cc': '647',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hyosung',
      'model': 'RT',
      'variant': 'RT 125',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hyosung',
      'model': 'RT',
      'variant': 'RT 250',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Hyosung',
      'model': 'ST',
      'variant': 'ST 7',
      'engine_cc': '678',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Indian',
      'model': 'Chief',
      'variant': 'Chief Classic',
      'engine_cc': '1811',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Indian',
      'model': 'Chief',
      'variant': 'Chief Dark Horse',
      'engine_cc': '1811',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Indian',
      'model': 'Chief',
      'variant': 'Chief Vintage',
      'engine_cc': '1811',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Indian',
      'model': 'Chieftain',
      'variant': 'Chieftain',
      'engine_cc': '1811',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Indian',
      'model': 'Roadmaster',
      'variant': 'Roadmaster',
      'engine_cc': '1811',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Indian',
      'model': 'Scout',
      'variant': 'Scout',
      'engine_cc': '1133',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Indian',
      'model': 'Scout',
      'variant': 'Scout Sixty',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Indian',
      'model': 'Springfield',
      'variant': 'Springfield',
      'engine_cc': '1181',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kanda',
      'model': 'Brave',
      'variant': 'Brave',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kanda',
      'model': 'Lovely',
      'variant': 'Lovely',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kanda',
      'model': 'Mission',
      'variant': 'Mission',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kanda',
      'model': 'Thunder',
      'variant': 'Thunder',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': '4S',
      'variant': '4S Champion',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Eliminator',
      'variant': 'Eliminator 175',
      'engine_cc': '174',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'GPX',
      'variant': 'GPX 400R',
      'engine_cc': '398',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'GPZ',
      'variant': 'GPZ 900R',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'KLF',
      'variant': 'KLF 650',
      'engine_cc': '649',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'KLX',
      'variant': 'KLX 110',
      'engine_cc': '112',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'KZ',
      'variant': 'KZ 1000',
      'engine_cc': '990',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja 1000',
      'engine_cc': '1043',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja 150RR',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja 250R',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja 300',
      'engine_cc': '296',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja 400R',
      'engine_cc': '399',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja 500R',
      'engine_cc': '498',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja 650',
      'engine_cc': '649',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja 650R',
      'engine_cc': '649',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja ER-6n',
      'engine_cc': '649',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja H2',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja Z1000',
      'engine_cc': '1043',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja Z650',
      'engine_cc': '649',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja Z750',
      'engine_cc': '748',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja ZX-10R',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja ZX-12R',
      'engine_cc': '1199',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja ZX-14',
      'engine_cc': '1352',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja ZX-14R',
      'engine_cc': '1441',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja ZX-150 KKR',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja ZX-6',
      'engine_cc': '636',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja ZX-6R',
      'engine_cc': '636',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja ZX-7',
      'engine_cc': '748',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja ZX-7R',
      'engine_cc': '748',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Ninja',
      'variant': 'Ninja ZX-9R',
      'engine_cc': '899',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Versys',
      'variant': 'Versys 1000',
      'engine_cc': '1043',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Versys',
      'variant': 'Versys 650',
      'engine_cc': '649',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Z250',
      'variant': 'Z250',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'Z800',
      'variant': 'Z800',
      'engine_cc': '806',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'ZZR',
      'variant': 'ZZR 1200',
      'engine_cc': '1164',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kawasaki',
      'model': 'ZZR',
      'variant': 'ZZR 1400',
      'engine_cc': '1441',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': '4-Stroke',
      'variant': '4-Stroke',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Aquila',
      'variant': 'Aquila 250',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Blaze',
      'variant': 'Blaze',
      'engine_cc': '165',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Boss',
      'variant': 'Boss',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Boss',
      'variant': 'Boss 115',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Campus',
      'variant': 'Campus',
      'engine_cc': '98',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Challenger',
      'variant': 'Challenger',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'CK',
      'variant': 'CK 100',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Comet',
      'variant': 'Comet',
      'engine_cc': '250',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'DX',
      'variant': 'DX',
      'engine_cc': '98',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Euro',
      'variant': 'Euro 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Euro',
      'variant': 'Euro 135',
      'engine_cc': '135',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'EX',
      'variant': 'EX',
      'engine_cc': '98',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Flyte',
      'variant': 'Flyte',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'GF',
      'variant': 'GF 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'GF',
      'variant': 'GF 170',
      'engine_cc': '165',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'GF',
      'variant': 'GF Laser',
      'engine_cc': '165',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Jupiter',
      'variant': 'Jupiter',
      'engine_cc': '250',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'K4',
      'variant': 'K4',
      'engine_cc': '98',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Kine',
      'variant': 'Kine',
      'engine_cc': '72',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'King',
      'variant': 'King',
      'engine_cc': '98',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Luna',
      'variant': 'Luna',
      'engine_cc': '50',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Luna',
      'variant': 'Luna Super',
      'engine_cc': '60',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Marvel',
      'variant': 'Marvel',
      'engine_cc': '98',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Nova',
      'variant': 'Nova',
      'engine_cc': '115',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Nova',
      'variant': 'Nova 135',
      'engine_cc': '135',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Pride',
      'variant': 'Pride',
      'engine_cc': '73',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'S70',
      'variant': 'S70',
      'engine_cc': '70',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Spark',
      'variant': 'Spark',
      'engine_cc': '70',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Stryker',
      'variant': 'Stryker',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Style',
      'variant': 'Style',
      'engine_cc': '73',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'SYM',
      'variant': 'SYM 50',
      'engine_cc': '50',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'SYM',
      'variant': 'SYM Flyte',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'V2',
      'variant': 'V2',
      'engine_cc': '58',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'V2',
      'variant': 'V2 80',
      'engine_cc': '73',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Velocity',
      'variant': 'Velocity',
      'engine_cc': '115',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Y2K',
      'variant': 'Y2K',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Zing',
      'variant': 'Zing',
      'engine_cc': '64',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'Zing',
      'variant': 'Zing 80',
      'engine_cc': '72',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'ZX',
      'variant': 'ZX',
      'engine_cc': '98',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Kinetic',
      'model': 'ZX',
      'variant': 'ZX Zoom',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '1190',
      'variant': '1190 RC 8',
      'engine_cc': '1195',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '1190',
      'variant': '1190 RC 8 R',
      'engine_cc': '1195',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '250',
      'variant': '250 SX',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '250',
      'variant': '250 XC-F',
      'engine_cc': '250',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '530',
      'variant': '530 EXC',
      'engine_cc': '510',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '530',
      'variant': '530 XC',
      'engine_cc': '510',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '65',
      'variant': '65 SX',
      'engine_cc': '65',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '690',
      'variant': '690 Enduro',
      'engine_cc': '654',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '690',
      'variant': '690 Enduro R',
      'engine_cc': '654',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '690',
      'variant': '690 SMC',
      'engine_cc': '654',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '690',
      'variant': '690 Supermoto',
      'engine_cc': '654',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '990',
      'variant': '990 Adventure',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '990',
      'variant': '990 Adventure R',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '990',
      'variant': '990 Super Duke R',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '990',
      'variant': '990 Supermoto',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': '990',
      'variant': '990 Supermoto R',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'Adventure',
      'variant': 'Adventure',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'Avatar',
      'variant': 'Avatar',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'Duke',
      'variant': 'Duke 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'Duke',
      'variant': 'Duke 200',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'Duke',
      'variant': 'Duke 250',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'Duke',
      'variant': 'Duke 350',
      'engine_cc': '350',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'Duke',
      'variant': 'Duke 390',
      'engine_cc': '373',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'Duke',
      'variant': 'Duke 690',
      'engine_cc': '690',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'Enduro',
      'variant': 'Enduro',
      'engine_cc': '250',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'MX',
      'variant': 'MX',
      'engine_cc': '65',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'Race',
      'variant': 'Race',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'RC',
      'variant': 'RC 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'RC',
      'variant': 'RC 200',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'RC',
      'variant': 'RC 250',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'RC',
      'variant': 'RC 390',
      'engine_cc': '373',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'RC',
      'variant': 'RC 8',
      'engine_cc': '1148',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'Stunt',
      'variant': 'Stunt 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'KTM',
      'model': 'Supermoto',
      'variant': 'Supermoto',
      'engine_cc': '654',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Adreno',
      'variant': 'Adreno',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Adreno',
      'variant': 'Adreno FX',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Beamer',
      'variant': 'Beamer',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'CRD',
      'variant': 'CRD 100',
      'engine_cc': '104',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Energy',
      'variant': 'Energy',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Energy',
      'variant': 'Energy FX',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Freedom',
      'variant': 'Freedom 110',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Freedom',
      'variant': 'Freedom 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Freedom',
      'variant': 'Freedom DX',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Freedom',
      'variant': 'Freedom LS',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Freedom',
      'variant': 'Freedom Prima 110',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Freedom',
      'variant': 'Freedom Prima 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Graptor',
      'variant': 'Graptor',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'NV',
      'variant': 'NV 2-Stroke',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'NV',
      'variant': 'NV 4-Stroke',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'NV',
      'variant': 'NV 4-Stroke DLX',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'NV',
      'variant': 'NV Special',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Prithvi',
      'variant': 'Prithvi',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Pulse',
      'variant': 'Pulse 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Pulse',
      'variant': 'Pulse 60',
      'engine_cc': '60',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Pulse',
      'variant': 'Pulse 75',
      'engine_cc': '75',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Select',
      'variant': 'Select 4',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Select',
      'variant': 'Select 4',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Select',
      'variant': 'Select II',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Sensation',
      'variant': 'Sensation',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Sensation',
      'variant': 'Sensation DLX',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Star',
      'variant': 'Star 4-Stroke',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Star',
      'variant': 'Star Euro 150',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Star',
      'variant': 'Star Euro 200 Electric-Start',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Star',
      'variant': 'Star Euro 200 Kick-Start',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Star',
      'variant': 'Star Euro 200 Self-Start',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Star',
      'variant': 'Star VIB',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Star',
      'variant': 'Star Xpress',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Supremo',
      'variant': 'Supremo',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Trendy',
      'variant': 'Trendy',
      'engine_cc': '60',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Trendy',
      'variant': 'Trendy DLX',
      'engine_cc': '60',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'LML',
      'model': 'Vespa',
      'variant': 'Vespa',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Arro',
      'variant': 'Arro',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Centuro',
      'variant': 'Centuro',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Centuro',
      'variant': 'Centuro Mirzya Spl Edition',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Centuro',
      'variant': 'Centuro N1',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Centuro',
      'variant': 'Centuro NXT',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Centuro',
      'variant': 'Centuro O1',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Centuro',
      'variant': 'Centuro O3',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Centuro',
      'variant': 'Centuro Rockstar',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Centuro',
      'variant': 'Centuro XT',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Cevalo',
      'variant': 'Cevalo',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Diablo',
      'variant': 'Diablo',
      'engine_cc': '300',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Duro',
      'variant': 'Duro',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Duro',
      'variant': 'Duro DZ',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Flyte',
      'variant': 'Flyte',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Gusto',
      'variant': 'Gusto',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Gusto',
      'variant': 'Gusto 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Gusto',
      'variant': 'Gusto 125 DX',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Gusto',
      'variant': 'Gusto 125 VX',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Gusto',
      'variant': 'Gusto DX',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Gusto',
      'variant': 'Gusto HX',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Gusto',
      'variant': 'Gusto VX',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Kine',
      'variant': 'Kine',
      'engine_cc': '72',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Mojo',
      'variant': 'Mojo',
      'engine_cc': '295',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Nova',
      'variant': 'Nova 135',
      'engine_cc': '135',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Nova',
      'variant': 'Nova EX',
      'engine_cc': '115',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Pantero',
      'variant': 'Pantero',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Pantero',
      'variant': 'Pantero T1',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Pantero',
      'variant': 'Pantero T2',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Pantero',
      'variant': 'Pantero T3',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Pantero',
      'variant': 'Pantero T4',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Pantero',
      'variant': 'Pantero V1',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Pantero',
      'variant': 'Pantero V2',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Pantero',
      'variant': 'Pantero V3',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Pantero',
      'variant': 'Pantero V4',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Rodeo',
      'variant': 'Rodeo',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Mahindra',
      'model': 'Stalio',
      'variant': 'Stalio',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Monto',
      'model': 'Avanti',
      'variant': 'Avanti Auto Power',
      'engine_cc': '49',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Monto',
      'model': 'Avanti',
      'variant': 'Avanti Kobra',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Monto',
      'model': 'Avantika',
      'variant': 'Avantika X Bike',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Monto',
      'model': 'Cosmo',
      'variant': 'Cosmo Blaster 100',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Monto',
      'model': 'Cosmo',
      'variant': 'Cosmo Blaster 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Monto',
      'model': 'Pengot',
      'variant': 'Pengot',
      'engine_cc': '79',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Moto Guzzi',
      'model': 'Audace',
      'variant': 'Audace 1400',
      'engine_cc': '1380',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Moto Guzzi',
      'model': 'Bellagio',
      'variant': 'Bellagio',
      'engine_cc': '935',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Moto Guzzi',
      'model': 'Breva',
      'variant': 'Breva',
      'engine_cc': '1064',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Moto Guzzi',
      'model': 'California',
      'variant': 'California 1400 Custom',
      'engine_cc': '1380',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Moto Guzzi',
      'model': 'California',
      'variant': 'California 1400 Touring',
      'engine_cc': '1380',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Moto Guzzi',
      'model': 'California',
      'variant': 'California Vintage 1100',
      'engine_cc': '1064',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Moto Guzzi',
      'model': 'Eldorado',
      'variant': 'Eldorado',
      'engine_cc': '1380',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Moto Guzzi',
      'model': 'Griso',
      'variant': 'Griso',
      'engine_cc': '1151',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Moto Guzzi',
      'model': 'Sport',
      'variant': 'Sport 1200',
      'engine_cc': '1151',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Moto Guzzi',
      'model': 'Stelvio',
      'variant': 'Stelvio',
      'engine_cc': '1151',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Moto Guzzi',
      'model': 'V7',
      'variant': 'V7',
      'engine_cc': '744',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Moto Guzzi',
      'model': 'V7',
      'variant': 'V7 II',
      'engine_cc': '744',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Moto Guzzi',
      'model': 'V9',
      'variant': 'V9',
      'engine_cc': '853',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'MV Agusta',
      'model': 'Brutale',
      'variant': 'Brutale 1090',
      'engine_cc': '1078',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'MV Agusta',
      'model': 'Brutale',
      'variant': 'Brutale 1090 R',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'MV Agusta',
      'model': 'Brutale',
      'variant': 'Brutale 1090 RR',
      'engine_cc': '1078',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'MV Agusta',
      'model': 'Brutale',
      'variant': 'Brutale 675',
      'engine_cc': '675',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'MV Agusta',
      'model': 'Brutale',
      'variant': 'Brutale 800',
      'engine_cc': '798',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'MV Agusta',
      'model': 'Brutale',
      'variant': 'Brutale 920',
      'engine_cc': '921',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'MV Agusta',
      'model': 'Brutale',
      'variant': 'Brutale 990 R',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'MV Agusta',
      'model': 'F3',
      'variant': 'F3 675',
      'engine_cc': '675',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'MV Agusta',
      'model': 'F3',
      'variant': 'F3 800',
      'engine_cc': '798',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'MV Agusta',
      'model': 'F3',
      'variant': 'F3 800 RC',
      'engine_cc': '798',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'MV Agusta',
      'model': 'F4',
      'variant': 'F4',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'MV Agusta',
      'model': 'F4',
      'variant': 'F4 RC',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'MV Agusta',
      'model': 'F4',
      'variant': 'F4 RR',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Fly',
      'variant': 'Fly',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Liberty',
      'variant': 'Liberty',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'MP3',
      'variant': 'MP3',
      'engine_cc': '493',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa 946',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa 946 Emporio Armani',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa Elegante',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa Esclusivo',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa GTS',
      'engine_cc': '278',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa GTS 300',
      'engine_cc': '278',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa GTS 300 Super',
      'engine_cc': '278',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa LX 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa LX 150',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa Primavera 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa Primavera 150',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa S 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa S 150',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa Sprint',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa SXL 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa SXL 150',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa VX 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa VXL 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa VXL 150',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Piaggio',
      'model': 'Vespa',
      'variant': 'Vespa VXL Elegante',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Rajdoot',
      'model': '350',
      'variant': 350,
      'engine_cc': '347',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Rotary',
      'model': 'Deer',
      'variant': 'Deer',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Rotary',
      'model': 'EL-Deer',
      'variant': 'EL-Deer',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet 350',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet 500',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet 500 EFI',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet Classic 350',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet Classic 500',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet Continental GT',
      'engine_cc': '535',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet Electra',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet Electra Deluxe',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet Electra EFI',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet Lightning',
      'engine_cc': '535',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet Machismo 500',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet Thunderbird 350',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Bullet',
      'variant': 'Bullet Thunderbird 500',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Cafe',
      'variant': 'Cafe Racer',
      'engine_cc': '535',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Classic',
      'variant': 'Classic',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Classic',
      'variant': 'Classic 350',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Classic',
      'variant': 'Classic 350 UCE',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Classic',
      'variant': 'Classic 500',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Classic',
      'variant': 'Classic 500 UCE',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Continental',
      'variant': 'Continental GT',
      'engine_cc': '535',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Electra',
      'variant': 'Electra 350 UCE',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Electra',
      'variant': 'Electra 4S',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Electra',
      'variant': 'Electra 500 UCE',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Electra',
      'variant': 'Electra 5S',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Himalayan',
      'variant': 'Himalayan 410',
      'engine_cc': '411',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Lightning',
      'variant': 'Lightning',
      'engine_cc': '535',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Machismo',
      'variant': 'Machismo 350',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Machismo',
      'variant': 'Machismo 500',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Machismo',
      'variant': 'Machismo Twinspark',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Rider',
      'variant': 'Rider 500',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Taurus',
      'variant': 'Taurus',
      'engine_cc': '325',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Thunderbird',
      'variant': 'Thunderbird',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Thunderbird',
      'variant': 'Thunderbird 350',
      'engine_cc': '346',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Royal Enfield',
      'model': 'Thunderbird',
      'variant': 'Thunderbird 500',
      'engine_cc': '499',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Access',
      'variant': 'Access',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Access',
      'variant': 'Access Spl Edition',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'B-King',
      'variant': 'B-King',
      'engine_cc': '1340',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Bandit',
      'variant': 'Bandit 1250S',
      'engine_cc': '1255',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Burgman',
      'variant': 'Burgman 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Burgman',
      'variant': 'Burgman 650',
      'engine_cc': '638',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Gixxer',
      'variant': 'Gixxer',
      'engine_cc': '155',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Gixxer',
      'variant': 'Gixxer 155',
      'engine_cc': '155',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Gixxer',
      'variant': 'Gixxer 250',
      'engine_cc': '248',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Gixxer',
      'variant': 'Gixxer SF',
      'engine_cc': '155',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Gladius',
      'variant': 'Gladius',
      'engine_cc': '645',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GS',
      'variant': 'GS 150 R',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSR-250',
      'variant': 'GSR-250',
      'engine_cc': '248',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSR-250R',
      'variant': 'GSR-250R',
      'engine_cc': '248',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSR-250S',
      'variant': 'GSR-250S',
      'engine_cc': '248',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSX-650',
      'variant': 'GSX-650',
      'engine_cc': '656',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSX-650F',
      'variant': 'GSX-650F',
      'engine_cc': '656',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSX-R1000',
      'variant': 'GSX-R1000',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSX-R1000Z',
      'variant': 'GSX-R1000Z',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSX-R125',
      'variant': 'GSX-R125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSX-R150',
      'variant': 'GSX-R150',
      'engine_cc': '155',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSX-R600',
      'variant': 'GSX-R600',
      'engine_cc': '599',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSX-R750',
      'variant': 'GSX-R750',
      'engine_cc': '749',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSX-S1000',
      'variant': 'GSX-S1000',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSX-S1000F',
      'variant': 'GSX-S1000F',
      'engine_cc': '999',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSX-S750',
      'variant': 'GSX-S750',
      'engine_cc': '749',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GSX-S750Z',
      'variant': 'GSX-S750Z',
      'engine_cc': '749',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GT',
      'variant': 'GT 125',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'GW',
      'variant': 'GW 250',
      'engine_cc': '248',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Hayabusa',
      'variant': 'Hayabusa',
      'engine_cc': '1340',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Hayabusa',
      'variant': 'Hayabusa 1300',
      'engine_cc': '1340',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Hayabusa',
      'variant': 'Hayabusa GSX-1300R',
      'engine_cc': '1340',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Hayabusa',
      'variant': 'Hayabusa Z Yoshimura',
      'engine_cc': '1300',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Hayate',
      'variant': 'Hayate',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Hayate',
      'variant': 'Hayate EP',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Hayate',
      'variant': 'Hayate ES',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Heat',
      'variant': 'Heat',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Inazuma',
      'variant': 'Inazuma',
      'engine_cc': '248',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Inazuma',
      'variant': 'Inazuma GW250',
      'engine_cc': '248',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Inazuma',
      'variant': 'Inazuma GW250F',
      'engine_cc': '248',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Inazuma',
      'variant': 'Inazuma GW250S',
      'engine_cc': '248',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Intruder',
      'variant': 'Intruder M1800',
      'engine_cc': '1783',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Intruder',
      'variant': 'Intruder M1800R',
      'engine_cc': '1783',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Intruder',
      'variant': 'Intruder M1800RZ',
      'engine_cc': '1783',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Intruder',
      'variant': 'Intruder M800',
      'engine_cc': '805',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Lets',
      'variant': 'Lets',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Skydrive',
      'variant': 'Skydrive',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'SlingShot',
      'variant': 'SlingShot',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'SlingShot',
      'variant': 'SlingShot Plus',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Swish',
      'variant': 'Swish',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Swish',
      'variant': 'Swish 125',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'TU',
      'variant': 'TU',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'TU',
      'variant': 'TU 250X',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'V-Strom',
      'variant': 'V-Strom 1000',
      'engine_cc': '1037',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'V-Strom',
      'variant': 'V-Strom 650',
      'engine_cc': '645',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'VZR',
      'variant': 'VZR 1800',
      'engine_cc': '1783',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Zeus',
      'variant': 'Zeus 125',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Zeus',
      'variant': 'Zeus 125 XCD',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Zeus',
      'variant': 'Zeus 125 XDU',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Zeus',
      'variant': 'Zeus 125 XEU',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Zeus',
      'variant': 'Zeus 125 XU',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Zeus',
      'variant': 'Zeus GT 125',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Zeus',
      'variant': 'Zeus GT 125 XCD',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Zeus',
      'variant': 'Zeus GT 125 XDU',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Zeus',
      'variant': 'Zeus GT 125 XEU',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Suzuki',
      'model': 'Zeus',
      'variant': 'Zeus GT 125 XU',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'America',
      'variant': 'America',
      'engine_cc': '865',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Bonneville',
      'variant': 'Bonneville',
      'engine_cc': '865',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Bonneville',
      'variant': 'Bonneville Street Twin',
      'engine_cc': '900',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Bonneville',
      'variant': 'Bonneville T100',
      'engine_cc': '900',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Bonneville',
      'variant': 'Bonneville T120',
      'engine_cc': '1200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Daytona',
      'variant': 'Daytona 675',
      'engine_cc': '675',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Daytona',
      'variant': 'Daytona 675R',
      'engine_cc': '675',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Daytona',
      'variant': 'Daytona 955i',
      'engine_cc': '955',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Rocket',
      'variant': 'Rocket III',
      'engine_cc': '2294',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Rocket',
      'variant': 'Rocket III Roadster',
      'engine_cc': '2294',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Rocket',
      'variant': 'Rocket III Touring',
      'engine_cc': '2294',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Rocket',
      'variant': 'Rocket X',
      'engine_cc': '2294',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Scrambler',
      'variant': 'Scrambler',
      'engine_cc': '865',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Speed',
      'variant': 'Speed Triple',
      'engine_cc': '1050',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Speedmaster',
      'variant': 'Speedmaster',
      'engine_cc': '865',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Sprint',
      'variant': 'Sprint',
      'engine_cc': '1050',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Sprint',
      'variant': 'Sprint GT',
      'engine_cc': '1050',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Street',
      'variant': 'Street Triple',
      'engine_cc': '675',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Street',
      'variant': 'Street Twin',
      'engine_cc': '900',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Thruxton',
      'variant': 'Thruxton',
      'engine_cc': '865',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Thruxton',
      'variant': 'Thruxton 1200R',
      'engine_cc': '1200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Thunderbird',
      'variant': 'Thunderbird',
      'engine_cc': '1699',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Thunderbird',
      'variant': 'Thunderbird LT',
      'engine_cc': '1699',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Thunderbird',
      'variant': 'Thunderbird Storm',
      'engine_cc': '1699',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Tiger',
      'variant': 'Tiger',
      'engine_cc': '800',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Tiger',
      'variant': 'Tiger 800 XC',
      'engine_cc': '799',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Tiger',
      'variant': 'Tiger 800 XCa',
      'engine_cc': '799',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Tiger',
      'variant': 'Tiger 800 XCx',
      'engine_cc': '799',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Tiger',
      'variant': 'Tiger 800 XR',
      'engine_cc': '799',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Tiger',
      'variant': 'Tiger 800 XRx',
      'engine_cc': '799',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Tiger',
      'variant': 'Tiger Explorer',
      'engine_cc': '1215',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Tiger',
      'variant': 'Tiger Explorer XC',
      'engine_cc': '1215',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Triumph',
      'model': 'Twenty',
      'variant': 'Twenty One',
      'engine_cc': '349',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Akula',
      'variant': 'Akula 310',
      'engine_cc': '310',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Apache',
      'variant': 'Apache 150',
      'engine_cc': '148',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Apache',
      'variant': 'Apache FX',
      'engine_cc': '313',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Apache',
      'variant': 'Apache RTR 160',
      'engine_cc': '160',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Apache',
      'variant': 'Apache RTR 180',
      'engine_cc': '177',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Apache',
      'variant': 'Apache RTR 200',
      'engine_cc': '197',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Apache',
      'variant': 'Apache RTR 200 Fi',
      'engine_cc': '197',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Apache',
      'variant': 'Apache RTR 220',
      'engine_cc': '220',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Apache',
      'variant': 'Apache RTR 250',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Apache',
      'variant': 'Apache RTR 300',
      'engine_cc': '313',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Apache',
      'variant': 'Apache X21 Racer Concept',
      'engine_cc': '212',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Apache',
      'variant': 'Apache Xventure 180',
      'engine_cc': '177',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Centra',
      'variant': 'Centra',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Champ',
      'variant': 'Champ',
      'engine_cc': '49',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Dazz',
      'variant': 'Dazz',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Draken',
      'variant': 'Draken',
      'engine_cc': '250',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Entorq',
      'variant': 'Entorq 210',
      'engine_cc': '212',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Fiero',
      'variant': 'Fiero',
      'engine_cc': '147',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Fiero',
      'variant': 'Fiero F2',
      'engine_cc': '147',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Fiero',
      'variant': 'Fiero FX',
      'engine_cc': '147',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Flame',
      'variant': 'Flame',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Flame',
      'variant': 'Flame DS',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Flame',
      'variant': 'Flame SR',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Jive',
      'variant': 'Jive',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Jive',
      'variant': 'Jive ES',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Jive',
      'variant': 'Jive KS',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Jupiter',
      'variant': 'Jupiter 110',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Jupiter',
      'variant': 'Jupiter FI',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Jupiter',
      'variant': 'Jupiter MillionR',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Jupiter',
      'variant': 'Jupiter ZX',
      'engine_cc': '109',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Max',
      'variant': 'Max',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Max',
      'variant': 'Max 100',
      'engine_cc': '98',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Max',
      'variant': 'Max 4R',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Max',
      'variant': 'Max 4R LX',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Metro',
      'variant': 'Metro',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Neo',
      'variant': 'Neo',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Phoenix',
      'variant': 'Phoenix',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Qube',
      'variant': 'Qube',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Radeon',
      'variant': 'Radeon',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Rockz',
      'variant': 'Rockz',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'RTR',
      'variant': 'RTR 160 Matte Blue',
      'engine_cc': '160',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'RTR',
      'variant': 'RTR 180 Matte Blue',
      'engine_cc': '177',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Samurai',
      'variant': 'Samurai',
      'engine_cc': '98',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Scooty',
      'variant': 'Scooty 60',
      'engine_cc': '60',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Scooty',
      'variant': 'Scooty 88',
      'engine_cc': '88',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Scooty',
      'variant': 'Scooty ES',
      'engine_cc': '60',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Scooty',
      'variant': 'Scooty Pep Plus',
      'engine_cc': '88',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Scooty',
      'variant': 'Scooty Streak',
      'engine_cc': '88',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Scooty',
      'variant': 'Scooty Teenz',
      'engine_cc': '60',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Scooty',
      'variant': 'Scooty Zest',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Shaolin',
      'variant': 'Shaolin',
      'engine_cc': '138',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Shogun',
      'variant': 'Shogun',
      'engine_cc': '108',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Spectra',
      'variant': 'Spectra',
      'engine_cc': '148',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Sport',
      'variant': 'Sport',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Sport',
      'variant': 'Sport ES',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Sport',
      'variant': 'Sport KS',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Star',
      'variant': 'Star 100',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Star',
      'variant': 'Star 110',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Star',
      'variant': 'Star City',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Star',
      'variant': 'Star City Plus',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Star',
      'variant': 'Star DLX',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Tormax',
      'variant': 'Tormax',
      'engine_cc': '148',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Velocity',
      'variant': 'Velocity 160 Street Fighter',
      'engine_cc': '160',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Victor',
      'variant': 'Victor',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Victor',
      'variant': 'Victor Edge',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Victor',
      'variant': 'Victor GLX',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Victor',
      'variant': 'Victor GX',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Wego',
      'variant': 'Wego',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Wego',
      'variant': 'Wego V3',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'Wego',
      'variant': 'Wego V4',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'XL',
      'variant': 'XL 100',
      'engine_cc': '100',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'XL',
      'variant': 'XL Super',
      'engine_cc': '70',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'TVS',
      'model': 'XL',
      'variant': 'XL Super Heavy Duty',
      'engine_cc': '70',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Vibgyor',
      'model': 'Gallop',
      'variant': 'Gallop',
      'engine_cc': '97',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Vibgyor',
      'model': 'Hunter',
      'variant': 'Hunter',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Vibgyor',
      'model': 'Persona',
      'variant': 'Persona 110',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Vibgyor',
      'model': 'Persona',
      'variant': 'Persona 200',
      'engine_cc': '200',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Vibgyor',
      'model': 'Shark',
      'variant': 'Shark',
      'engine_cc': '150',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Vibgyor',
      'model': 'Vida',
      'variant': 'Vida',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': '175',
      'variant': 175,
      'engine_cc': '175',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Alba',
      'variant': 'Alba',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Alba',
      'variant': 'Alba ES',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Alba',
      'variant': 'Alba KS',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Alpha',
      'variant': 'Alpha',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'BW',
      'variant': 'BW',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Crux',
      'variant': 'Crux',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Cygnus',
      'variant': 'Cygnus',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Cygnus',
      'variant': 'Cygnus Ray Z',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Delight',
      'variant': 'Delight',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Diversion',
      'variant': 'Diversion',
      'engine_cc': '600',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Diversion',
      'variant': 'Diversion F',
      'engine_cc': '600',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Diversion',
      'variant': 'Diversion XJ6',
      'engine_cc': '600',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Enticer',
      'variant': 'Enticer',
      'engine_cc': '123',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Fascino',
      'variant': 'Fascino',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Fazer',
      'variant': 'Fazer 125',
      'engine_cc': '123',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Fazer',
      'variant': 'Fazer 150',
      'engine_cc': '153',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Fazer',
      'variant': 'Fazer 250',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Fazer',
      'variant': 'Fazer Version 1',
      'engine_cc': '153',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Fazer',
      'variant': 'Fazer Version 2 Fi',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Fazer8',
      'variant': 'Fazer8',
      'engine_cc': '779',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'FJ',
      'variant': 'FJ',
      'engine_cc': '847',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'FJ-09',
      'variant': 'FJ-09',
      'engine_cc': '847',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'FZ',
      'variant': 'FZ Version 2 Fi',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'FZ-07',
      'variant': 'FZ-07',
      'engine_cc': '689',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'FZ-09',
      'variant': 'FZ-09',
      'engine_cc': '847',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'FZ-10',
      'variant': 'FZ-10',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'FZ1',
      'variant': 'FZ1',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'FZ1',
      'variant': 'FZ1 Fazer',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'FZ16',
      'variant': 'FZ16',
      'engine_cc': '153',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'FZ6R',
      'variant': 'FZ6R',
      'engine_cc': '600',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'FZ8',
      'variant': 'FZ8',
      'engine_cc': '779',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'FZS',
      'variant': 'FZS Version 1',
      'engine_cc': '153',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'FZS',
      'variant': 'FZS Version 2 Fi',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'G5',
      'variant': 'G5',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Gladiator',
      'variant': 'Gladiator',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Gladiator',
      'variant': 'Gladiator DX',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Gladiator',
      'variant': 'Gladiator Graffiti',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Gladiator',
      'variant': 'Gladiator RS',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Gladiator',
      'variant': 'Gladiator SS',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Jog',
      'variant': 'Jog',
      'engine_cc': '49',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Jog',
      'variant': 'Jog R',
      'engine_cc': '49',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Jog',
      'variant': 'Jog RR',
      'engine_cc': '49',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Lander',
      'variant': 'Lander',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Lander',
      'variant': 'Lander XTZ',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Libero',
      'variant': 'Libero',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Libero',
      'variant': 'Libero DLX',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Libero',
      'variant': 'Libero LX',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'M-SLAZ',
      'variant': 'M-SLAZ',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Majesty',
      'variant': 'Majesty',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Majesty',
      'variant': 'Majesty S',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Mio',
      'variant': 'Mio',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Mio',
      'variant': 'Mio Fino',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Mio',
      'variant': 'Mio Soul',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Mio',
      'variant': 'Mio Sporty',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'MT-01',
      'variant': 'MT-01',
      'engine_cc': '1670',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'MT-03',
      'variant': 'MT-03',
      'engine_cc': '321',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'MT-07',
      'variant': 'MT-07',
      'engine_cc': '689',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'MT-09',
      'variant': 'MT-09',
      'engine_cc': '847',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'MT-10',
      'variant': 'MT-10',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'MT-125',
      'variant': 'MT-125',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'MT-15',
      'variant': 'MT-15',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'MT-25',
      'variant': 'MT-25',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Neo',
      'variant': 'Neo',
      'engine_cc': '49',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'NMAX',
      'variant': 'NMAX',
      'engine_cc': '155',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Nouvo',
      'variant': 'Nouvo',
      'engine_cc': '132',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'R1',
      'variant': 'R1',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'R125',
      'variant': 'R125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'R15',
      'variant': 'R15',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'R25',
      'variant': 'R25',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'R3',
      'variant': 'R3',
      'engine_cc': '321',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'R50',
      'variant': 'R50',
      'engine_cc': '49',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'R6',
      'variant': 'R6',
      'engine_cc': '599',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Ray',
      'variant': 'Ray',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Ray',
      'variant': 'Ray 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Ray',
      'variant': 'Ray Z',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Ray',
      'variant': 'Ray ZR',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Ray',
      'variant': 'Ray ZR Cygnus',
      'engine_cc': '113',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'RD',
      'variant': 'RD 350',
      'engine_cc': '347',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'RX',
      'variant': 'RX',
      'engine_cc': '98',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'RX',
      'variant': 'RX 100',
      'engine_cc': '98',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'RX',
      'variant': 'RX 135',
      'engine_cc': '132',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'RXG',
      'variant': 'RXG 135',
      'engine_cc': '132',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'RXZ',
      'variant': 'RXZ 135',
      'engine_cc': '132',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Saluto',
      'variant': 'Saluto',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Saluto',
      'variant': 'Saluto 125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Saluto',
      'variant': 'Saluto RX',
      'engine_cc': '110',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Scorpio',
      'variant': 'Scorpio',
      'engine_cc': '223',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Scorpio',
      'variant': 'Scorpio Z225',
      'engine_cc': '223',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'SCR',
      'variant': 'SCR 950',
      'engine_cc': '942',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'SCR',
      'variant': 'SCR 950 Scrambler',
      'engine_cc': '942',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'SMAX',
      'variant': 'SMAX',
      'engine_cc': '155',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'SR',
      'variant': 'SR 400',
      'engine_cc': '399',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'SS',
      'variant': 'SS',
      'engine_cc': '123',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'SZ',
      'variant': 'SZ',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'SZ-R',
      'variant': 'SZ-R',
      'engine_cc': '153',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'SZ-RR',
      'variant': 'SZ-RR Version 1',
      'engine_cc': '153',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'SZ-RR',
      'variant': 'SZ-RR Version 2',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'SZ-S',
      'variant': 'SZ-S',
      'engine_cc': '153',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'SZ-X',
      'variant': 'SZ-X',
      'engine_cc': '153',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Tracer',
      'variant': 'Tracer',
      'engine_cc': '689',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'TZR50',
      'variant': 'TZR50',
      'engine_cc': '49',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'VMAX',
      'variant': 'VMAX',
      'engine_cc': '1679',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'X-City',
      'variant': 'X-City',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'X-Max',
      'variant': 'X-Max',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Xabre',
      'variant': 'Xabre',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'Xeon',
      'variant': 'Xeon',
      'engine_cc': '124',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'XSR',
      'variant': 'XSR 700',
      'engine_cc': '689',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'XSR',
      'variant': 'XSR 900',
      'engine_cc': '847',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YBR',
      'variant': 'YBR 110',
      'engine_cc': '106',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YBR',
      'variant': 'YBR 125',
      'engine_cc': '123',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YBX',
      'variant': 'YBX',
      'engine_cc': '123',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YZF-R1',
      'variant': 'YZF-R1',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YZF-R125',
      'variant': 'YZF-R125',
      'engine_cc': '125',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YZF-R15',
      'variant': 'YZF-R15',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YZF-R15',
      'variant': 'YZF-R15 Version 2',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YZF-R15',
      'variant': 'YZF-R15 Version 3',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YZF-R15S',
      'variant': 'YZF-R15S',
      'engine_cc': '149',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YZF-R1M',
      'variant': 'YZF-R1M',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YZF-R1S',
      'variant': 'YZF-R1S',
      'engine_cc': '998',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YZF-R25',
      'variant': 'YZF-R25',
      'engine_cc': '249',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YZF-R3',
      'variant': 'YZF-R3',
      'engine_cc': '321',
      'type': constant.BIKE
    }, {
      'id': uuidv4(),
      'brand': 'Yamaha',
      'model': 'YZF-R6',
      'variant': 'YZF-R6',
      'engine_cc': '599',
      'type': constant.BIKE
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Vehicle', null, {});
  }
};
