let password: string | number = 20;

type UserInfo1 = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails1 = {
  email: string;
  password: string;
};

let user: UserInfo1 | AccountDetails1 = {
  first: "khem",
  last: "rawat",
  age: 19,
  // email: "kd" // ⚠️ TypeScript accepts this, but it’s not ideal.
};

console.log(user);

const items: (number | string)[] = [1, 3, "hello"];
console.log(items);

// useCase of literal type
type Status = "success" | "error";

function handleStatus(status: Status) {
  if (status === "success") {
    console.log("All good!");
  } else {
    console.log("Something went wrong.");
  }
}
handleStatus("error");