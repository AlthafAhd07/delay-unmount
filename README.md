# Delay Unmount

<br/>

## Usage

You can animate your React component while mounting and unmounting.

<br/>

## Example

  <pre>
import { useState } from "react";
import Delay from "delay-unmount";

import YourComponent from "./YourComponent";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    &lt;div className="App">
      &lt;button onClick={() => setVisible((old) => !old)}>Toggle Mount&lt;/button>

      &lt;Delay
        component={YourComponent}
        dependancy={visible}
        delay="1000"
        mount="mount"
        unmount="unmount"
      />
    &lt;/div>
  );
}

export default App;

  </pre>

## CSS

  <pre>
.unmount {
  animation: outAnimation 1000ms ease-out;
}

@keyframes outAnimation {
  0% {
    scale: 1;
    opacity: 1;
  }
  100% {
    scale: 0;
    opacity: 0;
  }
}

.mount {
  animation: inAnimation 600ms ease-in;
}

@keyframes inAnimation {
  0% {
    scale: 0;
    opacity: 0;
  }
  100% {
    scale: 1;
    opacity: 1;
  }
}

  </pre>

<br/>

## How it will work

We should assign a classname to the given component ( Delay ) and style it using css ( Animations ) . To assign the classname you should use the `unmount` and `mount` props.

<br/>

## How to use

- You will get a component named Delay.
- It will accept 4 props ( Each prop should be in the same name )

  > component - The React component which you need the delay effect( Animation )

  > dependancy - Show or hide the component `( data-type : boolean )`

  > delay - delayTime which you time `(in milliseconds)`

  > unmount - This should be a `class name`, which you can add style to it using css. The style or animation apply to this class will worked when your React component is unmounting.

  > mount - This should be a `class name`, which you can add style to it using css. The style or animation apply to this class will worked when your React component is mounting.

<br/>

## Features

- Animating components while mounting and unmounting

- ## You can use different unmount and mount animations for different components ( Because each component can have a specific className )

<br/>

## If you are a performance guy

- For the mounting and unmounting process it will take only 4 rerenders except the initial render.

- If the parent component rerenders This component won't be rerendered ( memoized ).

<br/>

## **NOTE**

- **If you are using it, your component will wrapped inside a div tag. ( It may cause speficity problems when you selecting your component through CSS ) . You can see the div tag when you inspect your component after it was mounted.**

<br/>

## No problem There is a solution If you are not like to wrap inside a div tag.

<br/>

> There is custom hook named `useDelayUnmount`.

- <pre>import { useDelayUnmount } from "delay-unmount"</pre>

<br/>

> This hook accepts two values

- <pre>const show = useDelayUnmount( visible , 300)</pre>

  - dependancy - Show or hide the component `( data-type : boolean )`

  - delay - DelayTime which you time `(in milliseconds)`

<br/>

> It will return a boolean value ( true or false ). Now you can use it to apply the logic to the component.

- <pre>{ show && < YourComponent /> }</pre>

<br/>

> Pass two props to you component

- <pre>show && < YourComponent show={show} visible={visible} /></pre>
  - show : the value you getting from the custom hook
  - visible : Your dependancy value

<br/>

> Then take those props from your component

- <pre>
  function YourComponent({show , visible}){
   return(
    &lt;div> Hi friends &lt;/div>
    )
  }
  </pre>

<br/>

> Next were are going to use our logic to implement the unmount animation

- <pre>
  function YourComponent({ show, visible }) {
    return (
      &lt;div className={`default ${show && !visible ? "unmount" : "mount"}`} >
        Hi friends
      &lt;/div>
    );
  }
    </pre>

- Here we are assigning a classname to the parent element of the component, the unmount classname will only available when unmounting the Component

  - default - Your default classnames
  - unmount - class name that that you want animate while unmounting
  - mount - class name that that you want animate while mounting

<br/>

> ### **_Now you can add the animation or style you needed when unmounting the component through your css file by selecting the classname that you gave._**

<br/>

## Some times It may be confusing for you, You can refer this [github Repo](https://github.com/AlthafAhd07/delay-unmount) to get the example code.

<br/>

## Live example [site](https://delay-unmount.netlify.app/).

<br/>

## You can contact me through

- [LinkedIn](https://www.linkedin.com/in/althafahd/)
- [Twitter](https://twitter.com/Althaf_Ahd)

<br/>

# Thank you
