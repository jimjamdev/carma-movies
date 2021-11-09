interface ITheme {
  fontSizes?: Array<any> | Object;
  space?: Array<any> | Object;
  colors?: Array<any> | Object;
}

const theme: ITheme = {};

theme.fontSizes = [12, 14, 16, 24, 32, 48, 64, 96, 128];
theme.space = [
  // margin and padding
  0, 4, 8, 16, 32, 64, 128, 256,
];
theme.colors = {
  blue: '#07c',
  red: '#e10',
};

export { theme }