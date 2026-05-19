import EmployeModel from "../schemas/employe.schema.js";

const createEmploye = async (data) => {
  const newEmploye = await EmployeModel.create(data);
  return newEmploye;
};

const listEmployes = async () => {
  return await EmployeModel.find();
};

export default {
  createEmploye,
  listEmployes,
};