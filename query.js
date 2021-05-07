const db = require("./db");
const Employee = require("./models/employee");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createEmployee = async () => {
  const shan = await Employee.insertMany({
    first_name: "Shan",
    last_name: "sadequi",
    email: "shan@omer.com",
    job_title: "hokkah spot",
    address: {
      street: "125 bronx ny",
      city: "New York",
      state: "NY",
      zip: 10457,
    },
  });
  console.log("all Employee ", shan);
};
const updaingEmployee = async () => {
  const newUpdat = await Employee.updateMany(
    { name: "Ayman" },
    { $set: { email: " ayman@omer1.com" } }
  );
  console.log("new update in gmail ", newUpdat);
};

const deletingEmployee = async () => {
  const deleteOneEmployee = await Employee.deleteMany({
    name: "Shan",
  });
  console.log(" deleted it one employee  ", deleteOneEmployee);
};
const findAllEmployee = async () => {
  const allEmployee = await Employee.find();
  console.log("all Employee ", allEmployee);
};

const run = async () => {
  await createEmployee();
  await updaingEmployee();
  await deletingEmployee();
  await findAllEmployee();

  db.close();
};
run();
