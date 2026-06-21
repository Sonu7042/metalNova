exports.notFound = (req, res) => res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });

exports.errorHandler = (error, req, res, next) => {
  if (res.headersSent) return next(error);
  console.error(error);
  res.status(error.status || 500).json({ error: error.message || 'Internal server error' });
};
