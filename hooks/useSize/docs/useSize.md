---
title: useSize
nav:
  title: Hooks
  path: /hooks
group:
  path: /
---

# useSize

监听 DOM 节点尺寸变化的 Hook

## 代码演示

### 基础用法

<code src="./demo/demo01.tsx" />

### 传入 DOM 节点

<code src="./demo/demo02.tsx" />

## API

```typescript
const size = useSize(target);
```

### Params

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| target | DOM 节点或者 ref  | `Element` \| `(() => Element)` \| `MutableRefObject<Element>` | -      |

### Result

| 参数     | 说明                                     | 类型       |
|----------|------------------------------------------|------------|
| size  | DOM 节点的尺寸                         | `{ width: number, height: number } \| undefined`    |