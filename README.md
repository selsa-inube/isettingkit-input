# 📦 isettingkit-input: UI Components Library

## Overview

The **`isettingkit-input`** library provides a set of reusable components for managing business logic in frontend applications, specifically focusing on rendering and handling various input fields. This library is designed to integrate seamlessly with other libraries and backend services, ensuring a smooth user experience.

This documentation covers key components of the library, their usage, and integration. You can also use **Storybook** to visualize and test these components.

---

## 📚 Components

### 1. `DecisionConditionRenderer`

#### Description
`DecisionConditionRenderer` dynamically renders the appropriate input component based on the configuration of the decision or condition (`howToSetUp`). It supports select inputs, multi-select, range inputs, and dynamic fields based on conditions like equality, greater than, or less than.

#### Props
- **element** (`IDecision | ICondition`): The decision or condition data to render the input field.
- **onDecision** (`(value: IValue, nameCondition: string) => void`): Callback to handle decision updates.
- **valueData** (`string | number | { rangeFrom?: number; rangeTo?: number }`): The value to be displayed in the input.
- **message** (`string`): A message to show for validation feedback.
- **status** (`string`): The status of the input field (e.g., "valid", "invalid").
- **textValues** (`{ selectOptions: string; selectOption: string; rangeMin: (label: string) => string; rangeMax: (label: string) => string }`): A set of texts to use for the input field.

#### Usage Example
```tsx
<DecisionConditionRenderer
  element={element}
  onDecision={handleDecision}
  valueData={valueData}
  message="Invalid value"
  status="valid"
  textValues={{
    selectOptions: "Select an option",
    selectOption: "Selected",
    rangeMin: (label) => `Minimum ${label}`,
    rangeMax: (label) => `Maximum ${label}`,
  }}
/>
```

### 2. `DynamicField`

#### Description
`DynamicField` is a flexible input component designed to render various input types such as number, date, alphabetical text, currency, and percentage values. This component adapts its behavior based on the specified input type, providing a dynamic user experience tailored to the form's requirements.

#### Props
- **type** (`ITextfieldInputType`): The type of input to render (e.g., `"number"`, `"currency"`, `"date"`, etc.).
- **name** (`string`): The name attribute of the input field.
- **label** (`string`): The label that is displayed for the input field, providing context to the user.
- **valueInput** (`string | number`): The current value of the input field.
- **handleChange** (`(value: string | number) => void`): A callback function that handles changes in the input field's value.
- **messageValidate** (`string?`): Optional. A message that provides feedback for validation purposes.
- **statusValidate** (`string?`): Optional. The status of the input field (e.g., "valid", "invalid") for validation purposes.
- **onBlur** (`() => void?`): Optional. A callback function that is triggered when the input field loses focus.

#### Usage Example
```tsx
<DynamicField
  type="currency"
  name="price"
  label="Price"
  valueInput={12345}
  handleChange={handleChange}
  messageValidate="Invalid currency value"
  statusValidate="invalid"
/>
```

### 3. `InputRange`

#### Description
`InputRange` is a component that renders two input fields to handle a range of values, typically for cases where a minimum and maximum value are required.

#### Props
- **handleInputChangeFrom** (`(valueFrom: number) => void`): Callback to handle changes in the "from" value.
- **handleInputChangeTo** (`(valueTo: number) => void`): Callback to handle changes in the "to" value.
- **id** (`string`): The unique ID for the component.
- **labelFrom** (`string`): The label for the "from" input.
- **labelTo** (`string`): The label for the "to" input.
- **typeInput** (`ITextfieldInputType`): The type of input field.
- **required** (`boolean?`): Whether the input is required.
- **valueFrom** (`number?`): The initial "from" value.
- **valueTo** (`number?`): The initial "to" value.
- **message** (`string?`): Validation feedback message.
- **status** (`string?`): Validation status.

#### Usage Example
```tsx
<InputRange
  handleInputChangeFrom={handleFromChange}
  handleInputChangeTo={handleToChange}
  id="priceRange"
  labelFrom="Minimum Price"
  labelTo="Maximum Price"
  typeInput="currency"
  valueFrom={1000}
  valueTo={5000}
  message="Invalid range"
  status="valid"
/>
```
### 4. `MultipleChoices`

#### Description
`MultipleChoices` is a component that renders a set of options where multiple values can be selected. It supports displaying the selected options as tags, and users can remove selected options.

#### Props
- **id** (`string`): The unique ID for the component.
- **labelSelect** (`string`): The label for the selection input.
- **labelSelected** (`string`): The label for the selected options.
- **onHandleSelectCheckChange** (`(options: IOptionItemChecked[]) => void`): Callback to handle changes in the selected options.
- **options** (`IOptionItemChecked[]`): Array of options to select from.
- **placeholderSelect** (`string?`): Placeholder text for the selection input.
- **required** (`boolean?`): Whether the selection is required.
- **message** (`string?`): Validation feedback message.

#### Usage Example
```tsx
<MultipleChoices
  id="multiChoice"
  labelSelect="Select Options"
  labelSelected="Selected Options"
  onHandleSelectCheckChange={handleSelectionChange}
  options={[
    { id: "1", label: "Option 1", checked: true },
    { id: "2", label: "Option 2", checked: false },
  ]}
  placeholderSelect="Choose your options"
  message="Invalid selection"
/>
```

### 5. `SelectCheck`

#### Description
`SelectCheck` is a checkbox-style select input component that allows for selecting multiple options with checkboxes.

#### Props
- **id** (`string`): The unique ID for the component.
- **name** (`string`): The name of the input field.
- **options** (`IOptionItemChecked[]`): The options for the select input.
- **value** (`string | number`): The current selected value.
- **disabled** (`boolean?`): Disables the input if `true`.
- **fullwidth** (`boolean?`): Whether the input should take the full width of its container.
- **label** (`string?`): The label for the input field.
- **message** (`string?`): Validation feedback message.
- **onBlur** (`(event: FocusEvent) => void?`): Callback for blur events.
- **onChange** (`(event: React.ChangeEvent<HTMLInputElement>, name: string) => void?`): Callback for change events.
- **onChangeCheck** (`(event: React.ChangeEvent<HTMLInputElement>) => void?`): Callback for checking an option.

#### Usage Example
```tsx
<SelectCheck
  id="selectCheck"
  name="options"
  options={[
    { id: "1", label: "Option 1", checked: true },
    { id: "2", label: "Option 2", checked: false },
  ]}
  value="1"
  message="Invalid selection"
  fullwidth
  onChangeCheck={handleCheckChange}
/>
```

## 🛠 Utility Functions

### 1. `currencyFormat`

#### Description
Formats a number into a currency string (COP format).

#### Usage Example
```tsx
const formattedValue = currencyFormat(1000); // "$ 1.000"
```
## 🛠 Utility Functions

### 1. `currencyFormat`

#### Description
Formats a number into a currency string (COP format).

#### Usage Example
```tsx
const formattedValue = currencyFormat(1000); // "$ 1.000"
```

### 2. parseCurrencyString
Description
Parses a formatted currency string into a number.

#### Usage Example
```tsx
const numericValue = parseCurrencyString("$ 1.000"); // 1000
```

### 3. percentageFormat
Description
Formats a number into a percentage string (e.g., 50 becomes "50%").

#### Usage Example
```tsx
const formattedPercentage = percentageFormat(50); // "50%"
```
### 4. parsePercentageString
Description
Parses a percentage string into a numeric value.

#### Usage Example
```tsx
const numericPercentage = parsePercentageString("50%"); // 50
```

### 5. formatValue
Description
Formats a value based on its type (e.g., currency, percentage, date, number, alphabetical).

#### Usage Example
```tsx
const formattedValue = formatValue(1000, "currency"); // "$ 1.000"
const formattedPercentage = formatValue(50, "percentage"); // "50%"
```

### 🚀 How to Use
#### 1. Installation
Install the library using npm:
```bash
npm install isettingkit-input
```

#### 2. Import Components
Once installed, you can import and use the components like this:

```tsx
import { DynamicField, InputRange, SelectCheck, MultipleChoices, DecisionConditionRenderer } from 'isettingkit-input';
```
#### 3. Storybook Integration
To visualize the components in action, we use Storybook. Storybook allows developers to interact with the components in isolation, view different states, and confirm that they behave as expected.

You can run Storybook for this library by navigating to the project folder and using the following command:
```bash
npm run storybook
```
