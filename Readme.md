# Codeship Luxafor

Connects to a websocket (consider using https://github.com/philipheimboeck/websocket-bridge) and waits for codeship messages.

When a build fails luxafor will start flashing red.

## Installation

Install with `yarn`.

```
yarn install
```

## Run

1. First make sure the websocket server is up and running. If you don't have a websocket project consider using
https://github.com/philipheimboeck/websocket-bridge for it. It provides a webhook for codeship that forwards all messages to all
connected clients.

2. Start the service `sudo node src/index.js ws://localhost:8081`. `sudo` is usually required to connect to the luxafor device.

3. Send a post request to your webhook to test your setup.

```
curl -X POST -d '{"build": {"status": "error"}}' -H "Content-Type: application/json" localhost:8080
```

## Payload

It is required that the passed data has the following fields:

```json
{
    "build": {
        "status": "error"
    }
}
```

This is the same structure as codeship uses.
See codeship payload structure here: https://documentation.codeship.com/general/account/notifications/#webhook-payload

