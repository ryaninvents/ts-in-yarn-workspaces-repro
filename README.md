# ts-in-yarn-workspaces-repro

I'm trying to get Storybook working in a large existing project. This project uses Yarn workspaces, and does not rely on a separate transpile step for each package -- instead, it directly consumes the `.ts` files at build time for the final web app. However, this does not play nicely with Storybook. It seems that some, but not all, of the TypeScript syntax is being handled. As of commit `6ef47479f9775` in this project, I was getting this error:

    ModuleParseError: Module parse failed: The keyword 'private' is reserved (15:31)
    File was processed with these loaders:
    * ../node_modules/babel-loader/lib/index.js
    You may need an additional loader to handle the result of these loaders.
    | function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
    | var AdditionFactoryBean = /*#__PURE__*/function () {
    >   function AdditionFactoryBean(private initialValue) {
    |     _classCallCheck(this, AdditionFactoryBean);
    |   }
        at handleParseError (/Users/ryan/Projects/temp/node_modules/webpack/lib/NormalModule.js:469:19)
        at /Users/ryan/Projects/temp/node_modules/webpack/lib/NormalModule.js:503:5
        at /Users/ryan/Projects/temp/node_modules/webpack/lib/NormalModule.js:358:12



This relates to the `private` keyword in the `AdditionFactoryBean` constructor.