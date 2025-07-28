const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// اجعل المجلد "public" هو المصدر الثابت
app.use(express.static(path.join(__dirname, 'public')));

// اجعل الصفحة الرئيسية تشير إلى index.html داخل مجلد public
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
