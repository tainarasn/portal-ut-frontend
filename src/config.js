/** Volto Project Configuration
 * The recommended way for configuring a Volto project is using an add-on.
 * The project should only be considered as boilerplate, and all the code and
 * configuration should happen and be placed in add-ons.
 *
 * Both configuring directly and placing code in a project is discouraged, and might be
 * removed at some point from Volto.
 *
 * The local project is left for backwards compatibility for existing projects.
 */

// [Internal] All the imports of modules required for the configuration *must* happen
// here BEFORE the following line
import '@plone/volto/config';
import Numbers from 'components/Blocks/Numbers/View';
import Cards from 'components/Blocks/Cards/View';
import numberSVG from '@plone/volto/icons/megaphone.svg';
import cardsIcon from '@plone/volto/icons/cards.svg';
import sidebar from '@plone/volto/types/reducers/sidebar/sidebar';

export default function applyConfig(config) {
  config.settings = {
    ...config.settings,
    supportedLanguages: ['pt-br'],
    defaultLanguages: 'pt-br',
  };
  config.blocks.blocksConfig.numbers = {
    id: 'numbers',
    title: 'numbers',
    icon: numberSVG,
    group: 'text',
    view: Numbers,
    // edit: Footer,
    restricted: false,
    mostUsed: false,
    sidebarTab: false,
    blockHasOwnFocusManagement: false,
  };
  config.blocks.blocksConfig.cards = {
    id: 'cards',
    title: 'Cards',
    icon: cardsIcon,
    group: 'common',
    view: Cards,
    // edit: Footer,
    restricted: false,
    mostUsed: false,
    sidebarTab: false,
    blockHasOwnFocusManagement: false,
  };

  return config;
}
