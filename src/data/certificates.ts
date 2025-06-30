import { basePath } from '@/constants/const';

type CertificateType = {
  id: string;
  path: string;
};

export const CERTIFICATES: CertificateType[] = [
  {
    id: '1',
    path: `${basePath}/img/certificates/html_academy_js1_certificate_en.png`
  },
  {
    id: '2',
    path: `${basePath}/img/certificates/html_academy_js2_certificate_en.png`
  },
  {
    id: '3',
    path: `${basePath}/img/certificates/html_academy_js3_certificate_en.png`
  },
];