import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
// import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "./vite.config";
import { mergeConfig } from "vite";

export default mergeConfig(baseConfig, {
  build: {
    ssr: true,
    rollupOptions: {
      input: ['@qwik-city-plan']
    }
  },
  plugins: [
    staticAdapter({
      origin: 'https://yoursite.qwik.dev'
    })
  ]
})

// export default extendConfig(baseConfig, () => {
//   return {
//     build: {
//       ssr: true,
//       rollupOptions: {
//         input: ["@qwik-city-plan"],
//       },
//     },
//     plugins: [
//       staticAdapter({
//         origin: "https://yoursite.qwik.dev",
//       }),
//     ],
//   };
// });
