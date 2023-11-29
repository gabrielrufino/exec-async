# @gabrielrufino/exec-async

## Installing

```sh
# Production
npm install @gabrielrufino/exec-async

# Development
npm install -D @gabrielrufino/exec-async
```

## Using

```js
const execAsync = require('@gabrielrufino/exec-async')

(async function () {
  await execAsync('node -e "console.log(\'Hello, world!\')"')
})()
```
