## Express Typescript Starter

Boilerplate for express backend application with typescript

## Installation and Running

1. clone the repo
2. Install the dependencies by running `npm install`
3. Create **.env** file inside root folder of the project and add the following:

```
NODE_ENV=development
API_BASE_PATH='/api/v1/'
PORT=5000
JWT_TOKEN_SECRETE_KEY=123456
```

4. Start the dev server in watch mode by running `npm run start:dev`

You can go to `https://localhost:5000`

## For jest testing

1. Run dev test in watch mode by running `npm run test:dev`
2. Run test with coverage `npm run test:badges`

## For production build and Running

1. Create a production build by running `npm run build`
2. Run production server by running `node dist/src/index.js`
