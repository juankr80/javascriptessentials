export default function validateUser(req, res, next) {
  const { name, age } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Nombre requerido' });
  }

  if (typeof age !== 'number') {
    return res.status(400).json({ error: 'Edad inválida' });
  }

  next();
}