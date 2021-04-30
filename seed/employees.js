const db = require("../db");
const Employee = require("../models/employee");

db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {
  const employees = [
    {
      first_name: "Ayman",
      last_name: "omer",
      email: "ayman@omer.com",
      job_title: "web dve",
      address: {
        street: "123 bronx ny",
        city: "New York",
        state: "NY",
        zip: 10457,
      },
    },
    {
      first_name: "shafee",
      last_name: "ahemd",
      email: "shafee@ahemd.com",
      job_title: "forented Engineer",
      address: {
        street: "123 bronx ny",
        city: "New York",
        state: "NY",
        zip: 10457,
      },
    },
    {
      first_name: "stephnie ",
      last_name: "pena",
      email: "stephnie@pena.com",
      job_title: "javascript developer",
      address: {
        street: "395 bronx ny",
        city: "New York",
        state: "NY",
        zip: 10457,
      },
    },
  ];

  await Employee.insertMany(employees);
  console.log("Employees been created");
};

const run = async () => {
  await main();
  db.close();
};

run();
