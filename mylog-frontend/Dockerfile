FROM node:20

# 작업 디렉토리 생성
WORKDIR /mylog-frontend

# 종속성 설치를 위한 패키지 복사
COPY package.json yarn.lock ./

# 종속성 설치
RUN yarn install

# 앱 소스 복사
COPY . .

# Vite가 사용하는 기본 포트
EXPOSE 3000

# 개발 서버 실행
CMD ["yarn", "dev"]
