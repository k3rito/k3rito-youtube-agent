import express from 'express';
import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default('3000'),
  NODE_ENV: z.string().default('development'),
});

const env = envSchema.parse(process.env);

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/readiness', (req, res) => {
  res.status(200).json({ status: 'ready' });
});

if (require.main === module) {
  const port = parseInt(env.PORT, 10);
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });
}

export default app;
