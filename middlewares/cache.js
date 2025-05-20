const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 30 });

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;
  const cachedData = cache.get(key);

  if (cachedData) {
    console.log('\x1b[33m[Cache] Dados encontrados no cache\x1b[0m');
    return res.json(cachedData);
  }

  res.sendResponse = res.json;
  res.json = (body) => {
    cache.set(key, body);
    console.log('\x1b[36m[DB] Dados vindo do banco\x1b[0m');
    res.sendResponse(body);
  };

  next();
};

const clearCache = () => {
  console.log('\x1b[31m[Cache] Cache invalidado\x1b[0m');
  cache.flushAll();
};

module.exports = { cacheMiddleware, clearCache };
