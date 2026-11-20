import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    res.json(dao.findAllCourses());
  });

  app.post("/api/courses", (req, res) => {
    res.json(dao.createCourse(req.body));
  });

  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    res.json(dao.updateCourse(courseId, req.body));
  });

  app.delete("/api/courses/:courseId", (req, res) => {
    dao.deleteCourse(req.params.courseId);
    res.sendStatus(204);
  });

  // A course's modules (§5.4.6.1)
  app.get("/api/courses/:courseId/modules", (req, res) => {
    res.json(modulesDao.findModulesForCourse(req.params.courseId));
  });

  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    res.json(modulesDao.createModule({ ...req.body, course: courseId }));
  });
}
