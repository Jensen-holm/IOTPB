# Inside Of The Park Baseball

Open source clone of Outside Of The Park Baseball

### Dependencies

 - MongoDb
 - npm

### OSX local Setup

1. `git clone https://github.com/Jensen-holm/IOTPB.git` <br>
2. `cd IOTPB` <br>

#### MongoDB

1. `brew services start mongodb-community` <br>
2. `chmod +x get_mongo_url.sh` <br>

Now in order to find the local url that your mongodb is running on <br>
simply run: <br>

`./get_mongo_url.sh` <br>

you can now connect to mongo db with a driver using that url. <br>
When done, run: <br>

`brew services stop mongodb-community` <br>

to stop the local mongo db server. <br>

#### The Application

1. `npm install` <br>
2. `npm run dev` <br>

Open Your browser!

