# Bài tập môn Kiểm thử

- Bài tập 2 (tuần 4) môn học Kiểm thử - INIT3117 1
- Sinh viên: Công Nghĩa Hiếu - 21020540

## Các bước cài đặt để chạy test

B1: Clone repo

```bash
git clone https://github.com/congnghiahieu/btvn-2-tuan-4-qa.git
```

B2: Cài đặt dependencies

```bash
npm i
```

B3: Chạy test

```bash
npm run test
```

Lưu ý:

- File `main.js` chứa cài đặt của hàm `getFinalPrice`
- File `main.test.js` chứa test script của hàm `getFinalPrice` theo các phương pháp:
  - _kiểm thử bảng quyết định_
  - _kiểm thử biên_
  - _kiểm thử bằng luồng điều khiển với độ phủ C2_
  - _kiểm thử bằng luồng dữ liệu với độ phủ all-uses_
