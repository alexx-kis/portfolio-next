import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type HeaderSocialItem = {
  href: string;
  label: string;
  icon: string | StaticImport;
};

export const HEADER_SOCIALS_ITEMS: HeaderSocialItem[] = [
  {
    href: 'https://t.me/alexx_kis',
    label: 'telegram',
    icon: '/img/icons/telegram-icon.svg',
  },
  {
    href: 'https://github.com/alexx-kis',
    label: 'github',
    icon: '/img/icons/github-icon.svg',
  },
  {
    href: 'mailto:alexander.s.kislov@gmail.com',
    label: 'mail',
    icon: '/img/icons/email-icon.svg',
  },
  {
    href: 'tel:+79995251970',
    label: 'phone',
    icon: '/img/icons/phone-icon.svg',
  },
];