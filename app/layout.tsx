import '@radix-ui/themes/styles.css';
import StyledComponentsRegistry from "./lib/registry"
import { Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <StyledComponentsRegistry>
          <Theme>
            {children}
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
