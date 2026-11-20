import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  app.put("/api/modules/:moduleId", (req, res) => {
    res.json(dao.updateModule(req.params.moduleId, req.body));
  });

  app.delete("/api/modules/:moduleId", (req, res) => {
    dao.deleteModule(req.params.moduleId);
    res.sendStatus(204);
  });
}
