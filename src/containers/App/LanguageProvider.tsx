import { IntlProvider } from "react-intl";
import vi from '@assets/languages/vi.json'
import en from '@assets/languages/en.json'
import { useSelector } from "react-redux";
import appSelector from "./store/selector";

const messageTranslations = { vi, en };

export default function LanguageProvider({ children } : {children: JSX.Element}) {
  const {locale} = useSelector(appSelector);
  
  return (
    <IntlProvider locale={locale} messages={messageTranslations[locale]}>
      {children}
    </IntlProvider>
  );
}