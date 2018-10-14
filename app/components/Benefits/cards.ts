import {Card} from 'Components/Card';
import * as dynamicDesigns from './icons/dynamic-designs.svg';
import * as personalRolodex from './icons/your-personal-rolodex.svg';
import * as saveEnvironment from './icons/save-the-environment.svg';
import * as upToDate from './icons/up-to-date.svg';
import * as fraudProtection from './icons/fraud-protection.svg';

const cards: Card[] = [
  {
    icon: dynamicDesigns,
    title: ['Dynamic ', 'Designs'],
    content:
      'With these flexible business cards you can animate, code, design and update them. The only limit is your imagination',
  },
  {
    icon: personalRolodex,
    title: ['Your Personal ', 'Rolodex'],
    content:
      'Never loose, forget or run out of business cards anymore. You’ll have it all in your personal rolodex which never runs out.',
  },
  {
    icon: saveEnvironment,
    title: ['Save The ', 'Environment'],
    content:
      'No paper waste. See how many trees you and your company are saving when sharing online business cards all over the world.',
  },
  {
    icon: upToDate,
    title: ['Up-To', '-Date'],
    content:
      'Never throw away old business cards anymore because they needed updating. These digital business cards are instant adjustable.',
  },
  {
    icon: fraudProtection,
    title: ['Fraud ', 'Protection'],
    content:
      'Prevent fraud by verifing your business. No one will use paper business cards anymore for verification if you have a verified Bizzy account.',
  },
  {
    icon: dynamicDesigns,
    title: ['Share ', 'Connections'],
    content:
      'Share your new connections with your colleagues, friends and family. If your connections allow it. (we don’t want to get sued)',
  },
  {
    icon: dynamicDesigns,
    title: ['Get ', 'Insight'],
    content:
      'See the share analytics data on our portal. You now have insight on which employee shared the most business cards and to which companies.',
  },
  {
    icon: dynamicDesigns,
    title: ['Quick ', 'Set-up'],
    content:
      'Upload a CSV file or add your employees to our portal to instantly give them access to their company business card with their info.',
  },
  {
    icon: dynamicDesigns,
    title: ['Save ', 'Money'],
    content:
      'Save on purchasing paper business cards on a yearly basis. You only will pay us a low monthly fee which will save you money on the long run.',
  },
];

export default cards;
