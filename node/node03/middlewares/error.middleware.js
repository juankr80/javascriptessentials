export default function errorMiddleware(err, req, res, next) {
  console.error(err);

  res.status(500).json({
    success: false,
    error: 'Error interno del servidor'
  });
}