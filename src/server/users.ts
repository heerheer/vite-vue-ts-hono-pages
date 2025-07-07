import { Hono } from 'hono';

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

// Get all users
app.get('/', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT id, name, email, created_at FROM users ORDER BY created_at DESC'
    ).all();
    
    return c.json(results);
  } catch (error) {
    console.error('Error fetching users:', error);
    return c.json({ error: 'Failed to fetch users' }, 500);
  }
});

// Create a new user
app.post('/', async (c) => {
  try {
    const { name, email } = await c.req.json();
    
    if (!name || !email) {
      return c.json({ error: 'Name and email are required' }, 400);
    }
    
    const { success } = await c.env.DB.prepare(
      'INSERT INTO users (name, email) VALUES (?, ?)'
    ).bind(name, email).run();
    
    if (!success) {
      throw new Error('Failed to create user');
    }
    
    return c.json({ message: 'User created successfully' }, 201);
  } catch (error) {
    console.error('Error creating user:', error);
    return c.json({ error: 'Failed to create user' }, 500);
  }
});

export default app;
