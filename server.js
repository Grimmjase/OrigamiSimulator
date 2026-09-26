import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Set MIME types for custom extensions
express.static.mime.define({
  'application/json': ['fold'],
  'image/svg+xml': ['svg'],
  'image/webp': ['webp'],
  'font/ttf': ['ttf']
});

// Serve static assets from root directory
app.use(express.static(__dirname, {
  extensions: ['html', 'htm'],
  dotfiles: 'ignore'
}));

// Route fallback for client entry point
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Origami Simulator server listening on http://0.0.0.0:${PORT}`);
});
