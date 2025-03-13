const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// 정적 파일을 서빙합니다. ('public' 폴더로 파일을 이동할 수 있습니다)
app.use(express.static(path.join(__dirname, 'public')));

// 기본 경로에서 index.html 파일을 서빙합니다.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
