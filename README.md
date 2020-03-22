# UOSC Core Service 

## Setup

- Install NodeJS
- Install `npm` or `yarn`
- Get .env file (email zi.s.gao@gmail.com)
- Run yarn or npm install
- Run `yarn run dev` or `npm run dev`
- Check `http://localhost:8080/api/status` to see it works

## With Docker

- Make sure you have installed `Docker` and `Docker Compose`
- Just run `docker-compose up` to start the server

## User Data Object
```
{
  _id: String,
  created_at: TimeStamp,
  updated_at: TimeStamp,
  profile_picture: String,
  title: String,
  badges: [enum],
  firstname: String,
  lastname: String,
  username: String,
  description: String,
  rank: [Number]
}
```

## Contest Data Ojbect
```
{
  _id: String,
  week: String,
  contest_number: Integer,
  ranks: [String],
}
```
