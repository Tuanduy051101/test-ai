FROM nginx:alpine

# Tạo thư mục test_ai trong thư mục html của Nginx
RUN mkdir -p /usr/share/nginx/html/test_ai

# Sao chép tất cả các file trang web vào thư mục test_ai
COPY . /usr/share/nginx/html/test_ai

# Mở cổng 80
EXPOSE 80 