## 2022-02-27

- `.1044` trying to [follow this comment suggesting updating ts-loader](https://github.com/storybookjs/storybook/issues/16846#issuecomment-982979345).
  - `ts-loader` is not installed by default. How does Storybook handle TS?
    - [By default it uses `babel-loader`](https://storybook.js.org/docs/react/configure/typescript#default-configuration). This leaves me with a few paths to proceed:
      1. replace `babel-loader` with `ts-loader` for the whole project
      2. add `ts-loader` only for `node_modules`
      3. figure out why Babel doesn't like the `private` keyword in the constructor
    - I'm going to attempt option (2) first since it seems least invasive. Ideally I'd like to try (3) since it seems the cleanest, but I've been down that road a little bit and it may require more research.
      - option (2) resulted in an error `TypeError: loaderContext.getOptions is not a function`
        - [downgrade ts-loader?](https://stackoverflow.com/a/68806961)
        - this path works!