## Run Local Development Build
1. Install NodeJS and npm
2. Setup MongoDB and Firebase
3. Download project and unzip.
4. Setup .env file in project root. Current structure is:

        MONGO: 'mongodb url'
        FB_APIKEY='firebase apiKey'
        FB_AUTHDOMAIN='firebase authDomain'
        FB_DBURL='firebase databaseURL'
        FB_PID='firebase projectId'
        FB_SB= 'firebase storageBucket'
        FB_MSI='firebase messagingSenderId'
        FB_AID='firebase appId'
        FB_MID='firebase measurementId'

4. In project root run:

        npm install

5. To run project run:

        npm run dev

## Setting up on Heroku

