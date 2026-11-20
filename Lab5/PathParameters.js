export default function PathParameters(app) {
  app.get("/lab5/add/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(`${parseInt(a) + parseInt(b)}`);
  });

  app.get("/lab5/subtract/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(`${parseInt(a) - parseInt(b)}`);
  });

  // On your own (§5.2.2.3)
  app.get("/lab5/multiply/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(`${parseInt(a) * parseInt(b)}`);
  });

  app.get("/lab5/divide/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(`${parseInt(a) / parseInt(b)}`);
  });
}
