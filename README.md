# Counters

## Set up

### API

Create `api/.env` file:
```
MONGO_URL=mongodb://localhost/test
```

### React Front-end

Create `react/.env` file:
```
REACT_APP_API_URL=http://localhost:3001
REACT_APP_SOMETHING_ELSE=1
```

## Run

### Local MongoDB

```
mkdir -p ~/db/mongodb
mongod --dbpath ~/db/mongodb/
```

If `mongodb.lock` error, shut down existing `mongod` processes:
```
ps aux | grep mongo
kill -9 PID
```

### API

```
cd api
npm install
PORT=3001 nodemon
```

### React

```
cd react
npm install
npm start
```