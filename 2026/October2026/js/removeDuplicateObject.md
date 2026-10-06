If you want to remove duplicate objects from an array, the approach depends on **what makes two objects duplicates**.

### 1. Duplicate based on a property

For example, remove objects with the same `id`:

```js
const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" }
];

const unique = Array.from(
  new Map(arr.map(item => [item.id, item])).values()
);

console.log(unique);
```

Result:

```js
[
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
]
```

### 2. Keep the first duplicate

The above keeps the **last** object for each `id`. To keep the first:

```js
const unique = arr.filter(
  (item, index, self) =>
    index === self.findIndex(obj => obj.id === item.id)
);
```

### 3. Duplicate based on the entire object

If `{ id: 1, name: "John" }` and another identical object should be considered duplicates:

```js
const unique = arr.filter(
  (item, index, self) =>
    index === self.findIndex(
      obj => JSON.stringify(obj) === JSON.stringify(item)
    )
);
```

If you share your **array of objects** and tell me which field defines a duplicate (e.g. `id`, `name`, or multiple fields), I can give you the cleanest one-liner.
