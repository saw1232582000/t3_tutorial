// import { type AppType } from "next/app";

// import { api } from "~/utils/api";

// import "~/styles/globals.css";
// //import { ClerkProvider } from "@clerk/nextjs/dist/components.server";

// const MyApp: AppType = ({ Component, pageProps }) => {
//   return (
//     //<ClerkProvider {...pageProps}>
//       <Component {...pageProps} />
//     //</ClerkProvider>
//    );
// };

// export default api.withTRPC(MyApp);

// page/_app.tsx
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
 
export default api.withTRPC(MyApp);

