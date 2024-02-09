import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuButton extends Schema.Component {
  collectionName: 'components_menu_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.Text;
    type: Attribute.Enumeration<['secondary', 'primary']>;
  };
}

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'arrowDown';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface MenuIconSocialMedia extends Schema.Component {
  collectionName: 'components_menu_icon_social_medias';
  info: {
    displayName: 'icon-social-media';
    icon: 'twitter';
    description: '';
  };
  attributes: {
    url: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.Text;
    icon: Attribute.Media;
    decription: Attribute.Text;
  };
}

export interface MenuSingleLink extends Schema.Component {
  collectionName: 'components_menu_single_links';
  info: {
    displayName: 'SingleLink';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.Text;
  };
}

export interface ReusableCard extends Schema.Component {
  collectionName: 'components_reusable_cards';
  info: {
    displayName: 'Card';
    icon: 'folder';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    descrition: Attribute.Text;
    Img: Attribute.Media;
  };
}

export interface ReusableLabel extends Schema.Component {
  collectionName: 'components_reusable_labels';
  info: {
    displayName: 'label';
    icon: 'filter';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface ReusableLeftSideAboutUs extends Schema.Component {
  collectionName: 'components_reusable_left_side_about_uses';
  info: {
    displayName: 'left-side-about-us';
    icon: 'arrowLeft';
  };
  attributes: {
    title: Attribute.String;
    first: Attribute.Text;
    second: Attribute.Text;
    third: Attribute.Text;
  };
}

export interface ReusableRigthSideAboutUs extends Schema.Component {
  collectionName: 'components_reusable_rigth_side_about_uses';
  info: {
    displayName: 'Rigth-side-about-us';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String;
    item: Attribute.Component<'reusable.label', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.button': MenuButton;
      'menu.dropdown': MenuDropdown;
      'menu.icon-social-media': MenuIconSocialMedia;
      'menu.link': MenuLink;
      'menu.single-link': MenuSingleLink;
      'reusable.card': ReusableCard;
      'reusable.label': ReusableLabel;
      'reusable.left-side-about-us': ReusableLeftSideAboutUs;
      'reusable.rigth-side-about-us': ReusableRigthSideAboutUs;
    }
  }
}
