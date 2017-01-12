# MongoDB + Express + React + Node + 💖

## Set up

### API

Create `api/.env` file:
```
MONGO_URL=mongodb://localhost/test
TOKEN_SECRET=__REMEMBER_TO_CHANGE_THIS__
```

### React Front-end

Create `react/.env` file:
```
REACT_APP_API_URL=http://localhost:3001
REACT_APP_SOMETHING_ELSE=1
```

## Structure

- api
  - app.js · Where we set up Express, add middleware, and add routes
  - models/ · Where we create the models and schemas for the data we want stored in the database
  - routes/ · Where we create API routes that communicate with the outside world and work with the models
- react
  - src/ · Our front-end JavaScript
    - App.js · The master component that contains everything that is seen in the browser
    - components/ · Our React components for the different pieces of our UI
    - api/ · Our functions that interact with the API
    - index.css · Base CSS
  - public/ · Our front-end base HTML, images, fonts, etc
    - index.html · Where we can add meta tags, Google Analytics, etc

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

## Deploying

### API

```
cd api
now -e MONGO_URL=mongodb://USERNAME:PASSWORD@ACCOUNT.mlab.com:41078/staging -e NODE_ENV=production
```

Copy the URL to be used below.

### React

```
cd react
REACT_APP_API_URL=__YOUR_NOW_API_URL__ npm run build
cd build
now
```
