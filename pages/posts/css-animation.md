# CSS Animation
## clip-path
clip-path cho phép vẽ 1 một hình bất kỳ và nội dung của phần tử chỉ được hiển thị ở trong phạm vi hình đó
Ví dụ: 
// nội dung của thẻ div chỉ thấy được trong hình tròn có kích thước 50% của thẻ div
div{
    clip-path: circle(50%);
}

## Polygon
Hàm polygon cho phép vẽ 1 đa giác dạng bất kỳ (ít nhất 3 cạnh):
polygon(x1 y1, x2 y2, x3 y3..., xn yn);
Điểm đầu tiên trong hàm sẽ được nối với điểm cuối cùng trong hàm
Ví dụ: vẽ 1 tam giác
div{
    clip-path: polygon(50% 50%, 100% 50%, 100% 100%);
}
## tranform-origin
Đây là thuộc tính cho phép thay đổi gốc toạ độ của phần tử. Thuộc tính này bắt buộc phải sử dụng chung với transform

## animation-timing-function
Đây là thuộc tính cho phép thay đổi thời gian chạy animation. Có thể có những giá trị sau đây: linear, ease, ease-in, ease-out ease-in-out, cubic-bezier. Bạn có thể xem mô phỏng thời gian trực quan tại trang web: https://cubic-bezier.com/

### linear - tuyến tính
Thời gian chạy animation như nhau tại mọi thời điểm của animation

### ease (default) 
Ban đầu animation chạy chậm, sau đó nhanh hơn và kết thúc chậm hơn

### ease-in
Animation có khởi đầu chậm

### ease-out
Animation có kết thúc chậm

### ease-in-out
Là sự kết hợp giữa ease-in và ease-out. Animation sẽ có khởi đầu chậm và kết thúc chậm

## cubic-bezier
Hàm này cho phép tạo thời gian chạy animation tuỳ ý bạn bằng cách sử dụng đường cong cubic bezier.
Trong đường cong Cubic Bezier có 4 điểm: P0, P1, P2, P3 trong đó P0 và P3 lần lượt là điểm đầu và điểm cuối. CSS đã định nghĩa sẵn với P0(0, 0) và P3(1,1). Do đó ta chỉ cần nhập 2 điểm P1 và P2.
Cú pháp: cubic-bezier: (x1, y1, x2, y2); 

## Lưu ý
Trong CSS toạ độ Đề-cat có điểm gốc O(0,0) tại đỉnh trên cùng bên trái
![image info](/public/post-images/coord_in_r2.png)
