import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

/** 设置别名 */
const alias: Record<string, string> = {
  "@": pathResolve("src")
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    // * 使用 svg 图标
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]"
    }),
  ],
  resolve: {
    alias
  }
})
