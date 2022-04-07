export const primitivesRoutes = [
  {
    label: 'Primitives',
    pages: [
      { title: 'Accordion', slug: 'design#sheet' },
      { title: 'Alert', slug: 'design#alert' },
      { title: 'Alert Dialog', slug: 'design#alert-dialog' },
      { title: 'Avatar', slug: 'design#avatar' },
      { title: 'Badge', slug: 'design#badge', draft: true },
      { title: 'Banner', slug: 'design#banner' },
      { title: 'Button', slug: 'design#button' },
      { title: 'Card', slug: 'design#card' },
      { title: 'Checkbox', slug: 'design#checkbox' },
      { title: 'Container', slug: 'design#container' },
      { title: 'Context Menu', slug: 'design#contextmenu' },
      { title: 'Control Group', slug: 'design#controlgroup' },
      { title: 'Code', slug: 'design#code' },
      { title: 'Dialog', slug: 'design#dialog' },
      { title: 'Dropdown Menu', slug: 'design#dropdownmenu' },
      { title: 'Kbd', slug: 'design#kbd' },
      { title: 'Link', slug: 'design#link' },
      { title: 'Popover', slug: 'design#popover' },
      { title: 'Progress Bar', slug: 'design#progressbar' },
      { title: 'Radio', slug: 'design#radio' },
      { title: 'Radio Card', slug: 'design#radiocard' },
      { title: 'Section', slug: 'design#section', beta: true },
      { title: 'Sheet', slug: 'design#sheet' },
      { title: 'Slider', slug: 'design#slider' },
      { title: 'Status', slug: 'design#status' },
      { title: 'Switch', slug: 'design#switch' },
      { title: 'Table', slug: 'design#table' },
      { title: 'Tab Link', slug: 'design#tablink' },
      { title: 'Tabs', slug: 'design#tabs' },
      { title: 'Text', slug: 'design#text' },
      { title: 'Text Area', slug: 'design#textarea' },
      { title: 'Text Field', slug: 'design#textfield' },
      { title: 'Typography', slug: 'design#typography' },
      { title: 'Simple Toggle', slug: 'design#simpletoggle' },
      { title: 'Skeleton', slug: 'design#skeleton' },
      { title: 'Verified Badge', slug: 'design#verifiedbadge' },
    ],
  },
];

export type PageProps = {
  title: string;
  slug: string;
  draft?: boolean;
  deprecated?: boolean;
  beta?: boolean;
};

export type RouteProps = {
  label: string;
  pages: PageProps[];
};

export const allPrimitivesRoutes = primitivesRoutes.reduce((acc, curr: RouteProps) => {
  acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)];
  return acc;
}, []);
