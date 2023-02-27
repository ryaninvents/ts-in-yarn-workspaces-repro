class AdditionFactoryBean {
  constructor(private initialValue: number) {}

  add(...args: Array<number>): number {
    return args.reduce((acc, val) => acc + val, this.initialValue);
  }
}

export { AdditionFactoryBean };
