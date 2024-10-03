import Image from "next/image";
import { useTranslations } from 'next-intl'

export default function Home() {


  const t = useTranslations("HomePage")
  console.log(t)

  return (
    <main>
      <h1>{t('title')}</h1>
    </main>
  );
}

