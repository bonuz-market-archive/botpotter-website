import { PATH_PAGE } from '../../routes/paths';

// ----------------------------------------------------------------------

const menuConfig = [
  // {
  //   title: 'Home',
  //   path: '/',
  //   // children: [
  //   //   {
  //   //     items: [
  //   //       {
  //   //         title: 'Phrase',
  //   //         path: PATH_PAGE.phrase,
  //   //       },
  //   //       {
  //   //         title: 'Who Am I',
  //   //         path: PATH_PAGE.whoAmI,
  //   //       },
  //   //       {
  //   //         title: 'Topic',
  //   //         path: PATH_PAGE.topic,
  //   //       }
  //   //     ],
  //   //   }
  //   // ],
  // },
  {
    title: 'Browse',
    path: PATH_PAGE.browse,
  },

  {
    title: 'Create Bot',
    path: PATH_PAGE.createBot,
  },

  {
    title: 'Community',
    path: PATH_PAGE.community,
  },
  {
    title: 'About',
    path: PATH_PAGE.about,
  }
];

export default menuConfig;
