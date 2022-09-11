export type TPlatform =
  | 'Telegram'
  | 'Twitter'
  | 'Facebook'
  | 'Discord'
  | 'WhatsApp';

export type TCategory =
  | 'Support'
  | 'Administration'
  | 'Application'
  | 'Information'
  | 'Other';

export type TLicense = 'Free' | 'Commercial';

export interface IBots {
  title: string;
  body: string;
  monthlyPrice: number | string;
  yearlyPrice: number | string;
  telegramUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  discordUrl?: string;
  whatsAppUrl?: string;
  platform: TPlatform[] | [];
  category: TCategory[] | [];
  license: TLicense[] | [];
}

export interface IBotResponse {
  bots: IBots[];
}
