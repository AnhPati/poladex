import '@radix-ui/themes/styles.css'
import StyledComponentsRegistry from "./lib/registry"
import { Theme } from "@radix-ui/themes"
import { Header } from '@/components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <StyledComponentsRegistry>
          <Theme accentColor={"amber"}>
            <Header />
            <main>
              {children}
            </main>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
