import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '',
      href: getPermalink('/'),
    },
  ],
};

export const footerData = {
  socialLinks: [
    // { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/TATAR-LAB' },
    // { ariaLabel: 'Huggingface', icon: 'hf-logo', href: '' },
  ],
};
