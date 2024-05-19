const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const API_SERVICE_URL = 'https:api.api-ninjas.com/v1/cars';

// Proxy endpoints
app.use('/api', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove /api prefix when forwarding to API
  },
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});