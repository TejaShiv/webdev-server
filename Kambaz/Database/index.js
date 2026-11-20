import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const here = dirname(fileURLToPath(import.meta.url));
const load = (name) => JSON.parse(readFileSync(join(here, name), "utf-8"));

export default {
  courses: load("courses.json"),
  modules: load("modules.json"),
  assignments: load("assignments.json"),
  users: load("users.json"),
  enrollments: load("enrollments.json"),
};
