# einer-type

判断一个变量的类型。[English](./README.en.md)

## 安装

### npm

```bash
npm install einer-type
```

### yarn

```bash
yarn add einer-type
```

## 示例

### esm

#### isArray

```javascript
import { isArray } from "einer-type";

console.log(isArray([])); // -> true
```

#### isObject

```javascript
import { isObject } from "einer-type";

console.log(isObject({})); // -> true
```

#### inString

```javascript
import { inString } from "einer-type";

console.log(inString("")); // -> true
console.log(inString("string")); // -> true
```

#### isNumber

```javascript
import { isNumber } from "einer-type";

console.log(isNumber(12345)); // -> true
```

#### isBoolean

```javascript
import { isBoolean } from "einer-type";

console.log(isBoolean(false)); // -> true
```

#### isFunction

```javascript
import { isFunction } from "einer-type";

console.log(isFunction(() => {})); // -> true
```

#### has

```javascript
import { has } from "einer-type";

const obj = {
    name: "einer-type"
}
console.log(has(obj, "name")); // -> true
```

### cjs

#### isArray

```javascript
const { isArray } = require("einer-type");

console.log(isArray([])); // -> true
```

#### isObject

```javascript
const { isObject } = require("einer-type");

console.log(isObject({})); // -> true
```

#### inString

```javascript
const { inString } = require("einer-type");

console.log(inString("")); // -> true
console.log(inString("string")); // -> true
```

#### isNumber

```javascript
const { isNumber } = require("einer-type");

console.log(isNumber(12345)); // -> true
```

#### isBoolean

```javascript
const { isBoolean } = require("einer-type");

console.log(isBoolean(false)); // -> true
```

#### isFunction

```javascript
const { isFunction } = require("einer-type");

console.log(isFunction(() => {})); // -> true
```

#### has

```javascript
const { has } = require("einer-type");

const obj = {
    name: "einer-type"
}
console.log(has(obj, "name")); // -> true
```