# ENS UI 
**Please make sure you have MetaMask enabled and set to Goerli before starting server.**


## Available Scripts

In the project directory, you can run:

#### `yarn add`
Installs dependencies
#### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Libraries and Packages
- **[Create React App](https://github.com/facebook/create-react-app)**
- **[Ethers.js](https://docs.ethers.io/v5/)**
- **[GraphQL](https://www.npmjs.com/package/graphql)**
- **[Apollo Boost](https://www.npmjs.com/package/apollo-boost)**
- **[Apollo Boost](https://www.npmjs.com/package/@apollo/react-hooks)**
- **[React Appollo Hooks](https://www.npmjs.com/package/apollo-boost)**
- **[SCSS](https://www.npmjs.com/package/node-sass)**: To replace writing straight css.

## ENS Subgraph Issue
I was limited with what data that I got back from the subgraph. There were no clear connections between domain names and blocks.  The best I could do was filter by TTL. Sorting only the returned data added the complexity of storing in the state again. If I had more time, I would integrate a context or try to find a better solution. 


## UI Notes 
- **CSS**: To conserve time and focus on readability, I opted to write my own css instead of using a framework. I chose scss for convenience but I didn’t utilize the most of it’s functionality.  All css is written in alphabetic order for readability.
- **Modal**: I added a button to show a modal since I also did the contract variant.

## Further Enhancements
- **Ethereum Provider**: Add functionality to check if user has wallet and if user is on Goerli network.  Use provider and chain id to create a series of screens directing the user to take proper action
- **Typescript**: Adding Typescript
- **Styled Components**: Refactor to use Styled Components
- **Modal Transition**: Add modal transitions for UI


## Misc Notes 
The code base can be abstracted into more partials and certain functions can be rewritten to be more deterministic. However, I chose to keep it compact for this project to ease readability, not over engineer.