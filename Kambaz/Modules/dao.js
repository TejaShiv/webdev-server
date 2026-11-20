import db from "../Database/index.js";

export function findModulesForCourse(courseId) {
  return db.modules.filter((m) => m.course === courseId);
}

export function createModule(module) {
  const newModule = { ...module, _id: Date.now().toString() };
  db.modules = [...db.modules, newModule];
  return newModule;
}

export function updateModule(moduleId, moduleUpdates) {
  const module = db.modules.find((m) => m._id === moduleId);
  if (module) Object.assign(module, moduleUpdates);
  return module;
}

export function deleteModule(moduleId) {
  db.modules = db.modules.filter((m) => m._id !== moduleId);
}
