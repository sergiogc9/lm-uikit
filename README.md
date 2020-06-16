This repository is a **proposal** about how all teams can use the same UI components between React applications.

It is a **not** a final version, its purpose is to be an example **demo**. The intention is to show it with different components from different repositories. There are some consideration I want you to know:
- The components / libraries used are not decided. I used Material UI because I think is a good option. I also use other components outside from Material UI components to show they can be use, but that does not mean I would use them in a final version.
- I decided to use a provider based solution to control the theme and colours as Material UI does. This makes easy to change colors in Material UI components without changing the CSS in the components. This makes the provider **mandatory**, but another approach can be used. Also components can be used without the provider, but some of them will have the default colours and theme. This behaviour can be improved also.

## How to use

### Installation

Install the UI kit using npm:
```bash
npm install lm-uikit
```

### Use the provider

The provider helps passing some theme colors and options to the UI kit. It is mandatory:

```typescript
import ThemeProvider from "lm-uikit/lib/ThemeProvider";

const App: React.FC = props => {
    <ThemeProvider>
        // Content here
    </ThemeProvider>
};
```

#### `palette`

Set the theme colors used to the UI kit. See theme section for further information.

#### `typography`

Needed to let the UI kit to know about some typography changes done in the application. The options are:

```ts
type Typography = {
  htmlFontSize: number // Set the base font size in the application when changed using rem
}
```

The `htmlFontSize` option is needed when the base font size is changed using rem values. [Click here](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/) for further information.


### Components

#### TextField

Based on Material ui component outlined text field:

https://material-ui.com/es/components/text-fields/

```typescript
import TextField from "lm-uikit/lib/TextField";

<TextField
	label='Name'
	value={name}
	onChange={ev => {}}
/>
```

#### Switch

Based on [react-switch](https://github.com/markusenglund/react-switch):

```typescript
import Switch from "lm-uikit/lib/Switch";

<Switch checked={checked} onChange={() => setChecked(c => !c)} />
```

#### Select

Based on [react-select](https://react-select.com/home):

```typescript
import Select from "lm-uikit/lib/Switch";

const selectOptions = [
  { label: "January", value: "1" },
  { label: "February", value: "2" },
  { label: "March", value: "3" }
  // ...
];

<Select defaultValue={[selectOptions[1], selectOptions[2]]} options={selectOptions} isMulti />
```

### Theme customization

The colors used in the UI kit can be customized using the theme provider. The `palette` prop has the following interface:

```ts
type PaletteColor = {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

type Palette = {
  primary?: PaletteColor
  secondary?: PaletteColor
  error?: PaletteColor
  warning?: PaletteColor
  info?: PaletteColor
  success?: PaletteColor
}
```

Only the main value is mandatory. If light and dark are not set, they are computed automatically from the main color.

## Development

After cloning the repo the only thing to do is to start the development server. It is bootstrapped using `create-react-app`, hence it is as easy as:
```
npm start
```

The file `App.tsx` contains a demo page using some of the components.

### Storybook

Another option to test the components is using the storybook. You can start locally it using:

```
npm run storybook
```

Or you can see it here (the link is personal and it may fail):
http://foxraspby.ddns.net/storybook/
