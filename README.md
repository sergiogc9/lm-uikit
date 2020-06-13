## How to use

### Installation

Install the UI kit using npm:
```bash
npm install lm-uikit
```

### Use the provider

The provider helps passing some theming and options to the UI kit:

```typescript
import ThemeProvider from "lm-uikit/lib/ThemeProvider";

const App: React.FC = props => {
    <ThemeProvider palette={{ primary: { main: '#3AD4A7' } }}>
        // Content here
    </ThemeProvider>
};
```

The provider has the following props:

#### `palette`

Send the theme colors used to the UI kit. The palette has the following interface:

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
