import './styles.css'
import '@radix-ui/themes/styles.css'
import StyledComponentsRegistry from "./lib/registry"
import { Theme } from "@radix-ui/themes"
import { Header } from '@/components/Header'
import { DataProvider } from './components/DataProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <DataProvider>
          <StyledComponentsRegistry>
            <Theme accentColor={"amber"}>
              <Header />
              <main>
                {children}
              </main>
            </Theme>
          </StyledComponentsRegistry>
        </DataProvider>
      </body>
    </html>
  )
}
