import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path'; // path 모듈 가져오기

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'), // @를 src 폴더로 매핑
        },
    },
    plugins: [react(), svgr()],
});
