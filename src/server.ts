import app from './app';

const logger = console;

app.listen(3000, () => logger.log('🚀', 'Server running on http://localhost:3000'));
