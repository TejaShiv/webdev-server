export default function QueryParameters(app) {
  app.get("/lab5/calculator", (req, res) => {
    const { a, b, operation } = req.query;
    const x = parseInt(a);
    const y = parseInt(b);
    let result = 0;
    switch (operation) {
      case "add":
        result = x + y;
        break;
      case "subtract":
        result = x - y;
        break;
      // On your own (§5.2.2.3)
      case "multiply":
        result = x * y;
        break;
      case "divide":
        result = x / y;
        break;
      default:
        res.status(400).send(`Invalid operation: ${operation}`);
        return;
    }
    res.send(result.toString());
  });
}
