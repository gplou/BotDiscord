const axios = require('axios').default;

const handleMessage = (msg) => {
    //!covid spain (sin fechaç == today)
    const country = msg.content.split(" ")[1];
    axios.get(`https://api.covid19tracking.narrativa.com/api/2020-10-31/country/${country}`).then( (response) => {
        //today_new_confirmed, today_new_deaths
        if (response) {
            response = response.data;
            const confirmed = response.dates['2020-10-31'].countries[country].today_new_confirmed;
            const deaths = response.dates['2020-10-31'].countries[country].today_new_deaths;
            const uzi = response.dates['2020-10-31'].countries[country].today_intensive_care;
            msg.reply(JSON.stringify({confirmed, deaths, uzi}));
        }
    });
} 

module.exports.handleMessage = handleMessage;