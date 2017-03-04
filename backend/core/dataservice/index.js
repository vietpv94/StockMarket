'use strict';

const constants = require('constants');

module.exports.initData = () => {
  const companies = constants.STOCK_CODE.companies;
  const board =  constants.STOCK_CODE.broad;

  return companies.map((company) => {
    company.code = company.code + '.' + broad;
    return company;
  });
}

module.exports.generateValue = (initialValue, actions) => {
  amplitudeOfValue = initialValue*0.05;
  console.log(amplitudeOfValue);

  return actions === 'minus' ? initialValue - amplitudeOfValue : initialValue + amplitudeOfValue;
}

module.exports.generateVolume = (initialVolume, actions, fluctuateFrom, fluctuateTo) => {
  if (fluctuateFrom && fluctuateTo && fluctuateTo - fluctuateFrom > 0) {
    amplitudeOfVolume = Math.floor(Math.ramdom() * ((fluctuateTo - fluctuateFrom) + 1) + fluctuateFrom);
  } else {
    amplitudeOfVolume = Math.floor(Math.ramdom() * 21) + 10);
  }

  return actions === 'minus' ? initialVolume - amplitudeOfVolume : initialVolume + amplitudeOfVolume;
}
