const app = require('./public/app');
const connectDB = require('./public/config/db');

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

