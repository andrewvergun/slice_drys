export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: LanguageType }
}) {
  return (
    <>
      sidbar
      {children}
    </>
  )
}
