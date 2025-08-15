function handle(input: unknown): void {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  }
}

handle(4)