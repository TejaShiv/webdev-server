import db from "../Database/index.js";

export function findAllCourses() {
  return db.courses;
}

export function findCourseById(courseId) {
  return db.courses.find((c) => c._id === courseId);
}

export function createCourse(course) {
  const newCourse = { ...course, _id: Date.now().toString() };
  db.courses = [...db.courses, newCourse];
  return newCourse;
}

export function updateCourse(courseId, courseUpdates) {
  const course = db.courses.find((c) => c._id === courseId);
  if (course) Object.assign(course, courseUpdates);
  return course;
}

export function deleteCourse(courseId) {
  db.courses = db.courses.filter((c) => c._id !== courseId);
}
