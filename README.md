# HCM Web — Hướng dẫn chạy trên máy cá nhân (dành cho người mới)

> ✅ Mục tiêu: Ai cũng có thể tải về và chạy website này trên máy tính Windows/macOS mà **không cần biết lập trình**.

---

## Mục lục
1. [Bạn cần chuẩn bị gì](#bạn-cần-chuẩn-bị-gì)
2. [Cách tải mã nguồn về máy](#cách-tải-mã-nguồn-về-máy)
3. [Mở dự án bằng VS Code](#mở-dự-án-bằng-vs-code)
4. [Cài đặt thư viện (1 lần duy nhất)](#cài-đặt-thư-viện-1-lần-duy-nhất)
5. [Chạy website trên máy (chế độ phát triển)](#chạy-website-trên-máy-chế-độ-phát-triển)
6. [Cách dừng website](#cách-dừng-website)
7. [Xây bản dựng sẵn để xem thử (tùy chọn)](#xây-bản-dựng-sẵn-để-xem-thử-tùy-chọn)
8. [Câu hỏi thường gặp (FAQ)](#câu-hỏi-thường-gặp-faq)
9. [Thông tin thêm](#thông-tin-thêm)

---

## Bạn cần chuẩn bị gì

> Làm **đủ 3 bước** dưới đây là chạy được:

1) **Node.js bản LTS (khuyến nghị Node 20 hoặc 22)**
   - Vào trang chủ Node.js (tìm trên Google: *Node.js*), bấm nút tải về phiên bản **LTS**.
   - Cài đặt như bình thường → nhấn *Next* đến hết.
   - Kiểm tra sau khi cài:
     - Mở **Command Prompt/PowerShell** (Windows) hoặc **Terminal** (macOS)
     - Gõ `node -v` và `npm -v`  
       Nếu thấy hiện số phiên bản (ví dụ `v22.x.x`), là xong.

2) **Visual Studio Code (VS Code)**
   - Tìm *Visual Studio Code* trên Google → tải về → cài đặt.
   - Sau khi cài, mở VS Code lên là được.

3) *(Khuyến nghị, nhưng **không bắt buộc**)* **Git**
   - Nếu bạn muốn **clone** repo bằng lệnh `git clone`.  
   - Nếu **không cài Git**, bạn vẫn có thể **Download ZIP** (xem phần tiếp theo).

> ❗ Không cần cài Java, Python hay công cụ phức tạp khác.

---

## Cách tải mã nguồn về máy

Bạn có **2 cách**. Chọn **một** trong hai:

### Cách A — Dễ nhất: **Download ZIP**
1. Truy cập trang GitHub của dự án.
2. Bấm nút **Code** màu xanh lá → chọn **Download ZIP**.
3. Sau khi tải xong, **giải nén** file ZIP vào một thư mục (ví dụ `D:\hcm-web`).

### Cách B — Dùng Git (nếu đã cài Git)
Mở Command Prompt/PowerShell (Windows) hoặc Terminal (macOS) rồi chạy:
```bash
git clone https://github.com/PDK-23/hcm-web.git
```
Sau đó mở thư mục `hcm-web` vừa clone về.

---

## Mở dự án bằng VS Code

1. Mở **VS Code**.
2. Vào **File → Open Folder...** và chọn thư mục dự án (thư mục vừa giải nén/clone).
3. Mở **Terminal** tích hợp của VS Code:
   - Vào menu **Terminal → New Terminal**.  
   - Một cửa sổ dòng lệnh sẽ xuất hiện ở cạnh dưới VS Code.

> Lưu ý: **Mọi lệnh** ở các mục tiếp theo đều gõ trong **Terminal của VS Code**.

---

## Cài đặt thư viện (1 lần duy nhất)

Trong Terminal (đang đứng ở thư mục dự án), gõ:
```bash
npm install
```
- Lệnh này sẽ tải các thư viện cần thiết (mất vài phút tùy mạng).
- Chỉ cần chạy **1 lần** sau khi tải dự án về (hoặc khi có cập nhật thư viện).

> Nếu thấy dòng giống **added XX packages** hoặc **up to date**, là cài xong.

---

## Chạy website trên máy (chế độ phát triển)

Trong Terminal, chạy:
```bash
npm run dev
```

- Sau vài giây, Terminal sẽ hiển thị một địa chỉ dạng:
  - `http://localhost:5173/` (cổng mặc định của Vite là **5173**)
- Bấm **Giữ Ctrl và click** vào đường link trong Terminal, hoặc **copy** link dán vào trình duyệt (Chrome/Edge/Firefox).

> Nếu cổng 5173 đang bận, Vite sẽ tự động chọn cổng khác (5174, 5175, ...). Hãy mở đúng **địa chỉ** hiện trong Terminal.

---

## Cách dừng website

- Quay lại cửa sổ **Terminal** đang chạy web.
- Nhấn tổ hợp phím **Ctrl + C** (Windows/macOS).
- Khi được hỏi `Terminate batch job (Y/N)?` → bấm **Y** rồi Enter (nếu có).

---

## Xây bản dựng sẵn để xem thử (tùy chọn)

Nếu bạn muốn tạo bản “đóng gói” giống khi đưa lên máy chủ:

1) Xây bản dựng:
```bash
npm run build
```

2) Xem thử bản dựng:
```bash
npm run preview
```
- Terminal sẽ hiện một **địa chỉ localhost** (thường cũng trên cổng 4173/5173). Mở trên trình duyệt để xem.

> `npm run dev` dành cho **phát triển** (tự làm mới khi bạn sửa file).  
> `npm run build` + `npm run preview` dùng để **xem bản đóng gói**.

---

## Câu hỏi thường gặp (FAQ)

**1) Mở `npm` báo: `'npm' is not recognized as an internal or external command`?**  
→ Máy chưa nhận Node.js/NPM. Hãy:
- Đóng VS Code, cài/khôi phục **Node.js (bản LTS)** lại từ trang chủ.
- Mở lại VS Code và Terminal, gõ `node -v`, `npm -v` để kiểm tra.

**2) Chạy `npm install` bị lỗi mạng?**  
→ Kiểm tra Internet/Firewall/VPN. Thử lại sau vài phút.

**3) `npm run dev` chạy nhưng trình duyệt không mở?**  
→ Hãy **copy** đường link trong Terminal (ví dụ `http://localhost:5173`) và dán vào thanh địa chỉ trình duyệt.

**4) Báo lỗi “port in use” (cổng đang dùng)?**  
→ Tắt các cửa sổ Terminal đang chạy trước đó (Ctrl+C). Hoặc đổi sang cổng khác theo gợi ý trong Terminal.

**5) Lỗi lạ sau khi kéo/cập nhật code mới về?**  
→ Thử xóa thư mục `node_modules` và file `package-lock.json`, sau đó chạy lại:
```bash
npm install
npm run dev
```

**6) Có cần cài thêm phần mềm gì khác không?**  
→ Không. Chỉ cần **Node.js** và **VS Code** là đủ để chạy local.

---

## Thông tin thêm

- Dự án này sử dụng **React + Vite** (công cụ chạy web nhanh, cổng mặc định 5173).  
- Thư mục chính thường gặp:
  - `src/` — mã nguồn giao diện
  - `public/` — tài nguyên tĩnh (ảnh, biểu tượng…)
  - `index.html` — tệp HTML gốc
- Nếu bạn chỉ **xem/test** giao diện: cứ làm theo đúng các bước ở trên là chạy được.

Chúc bạn chạy web thành công! 🎉