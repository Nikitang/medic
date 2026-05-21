/* eslint-disable */

const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

const authMiddleware = (req, res, next) => {
    // Пропускаем публичные эндпоинты
    if (req.path === '/login' || req.path === '/registration') {
        return next();
    }

    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }
    next();
};

server.use(authMiddleware);

server.post('/login', (req, res) => {
    try {
        const { email, password } = req.body;
        const db = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
        );
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.email === email && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.post('/registration', (req, res) => {
    try {
        const { name, surname, lastname, email, password } = req.body;

        if (!name || !surname || !email || !password) {
            return res.status(400).json({ message: 'Все поля обязательны' });
        }

        const dbPath = path.resolve(__dirname, 'db.json');
        const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'));
        const users = db.users || [];

        const existingUser = users.find((user) => user.email === email);
        if (existingUser) {
            return res
                .status(409)
                .json({ message: 'Пользователь с таким email уже существует' });
        }

        const newId =
            users.length > 0 ? Math.max(...users.map((u) => +u.id)) + 1 : 1;

        const newUser = {
            id: String(newId),
            name,
            surname,
            lastname,
            email,
            password,
        };

        users.push(newUser);
        db.users = users;

        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'UTF-8');

        const { password: _, ...userWithoutPassword } = newUser;
        return res.status(201).json(userWithoutPassword);
    } catch (e) {
        console.error('Register error:', e);
        return res.status(500).json({ message: 'Ошибка при регистрации' });
    }
});

server.use(router);

server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
