import {DateTime, Duration, Info, Interval, Settings} from 'luxon';

const serverTimeRoute = (app) => {
    app.route('/serverTime')
    .get((req, res) => {
        let now = DateTime.local();
        res.json(now.toLocaleString(DateTime.TIME_24_WITH_SHORT_OFFSET));
    });
}

export default serverTimeRoute;