# TypeScript starter project for React / Express

This is a starter project for a simple web app. It includes:
- client-side: TypeScript with React + Mobx
- server-side: TypeScript with Express

## Getting started

Start the client in one terminal:
```
cd client
yarn start
```

Start the server in another:
```
cd server
yarn start
```

## Updating the API

Client and server communicate via a simple REST API defined in [`api/rest.api`](api/rest.api) (see [documentation](https://www.npmjs.com/package/@zenclabs/api)).

After updating the API, you can update the client and server code:
```
cd api
yarn generate
```

For a more thorough example, check out the [rentals example project](https://github.com/fwouts/rentals).
