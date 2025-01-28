import { TelegramIcon } from '@/assets/icons';
import React from 'react';
import { basePath } from './const';

type HeaderSocialItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export const HEADER_SOCIALS_ITEMS: HeaderSocialItem[] = [
  {
    href: 'https://t.me/alexx_kis',
    label: 'telegram',
    icon: TelegramIcon,
  },
  {
    href: 'https://github.com/alexx-kis',
    label: 'github',
    icon: `${basePath}/img/icons/github-icon.svg`,
  },
  {
    href: 'mailto:alexander.s.kislov@gmail.com',
    label: 'mail',
    icon: `${basePath}/img/icons/email-icon.svg`,
  },
  {
    href: 'tel:+79995251970',
    label: 'phone',
    icon: `${basePath}/img/icons/phone-icon.svg`,
  },
];