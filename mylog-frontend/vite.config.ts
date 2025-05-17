import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // 0.0.0.0 으로 바인딩해서 도커 컨테이너 외부 접속 허용
    port: 5173, // 원하면 다른 포트로 변경 가능
  },
});
