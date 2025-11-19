import "./globals.css";
import MuiThemeProvider from "./theme";
import ConditionalDrawer from "./ConditionalDrawer";

export const metadata = {
  title: "My App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MuiThemeProvider>
          <ConditionalDrawer>
            {children}
          </ConditionalDrawer>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
