# Food Information
A Food information to show the food-item isDelicious or isHealthy

## Tech Stack
- ReactJS : Used CRA for the scaffolding.
- Styled-components : For Styling the components
- PropTypes : For prop checking


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size


## Approach 
To create the solution there are 2 approaches one can take:

1) Non-HOC (traditional way of creating the SPA application)


2) HOC 

I have developed the solution on HOC. Reason is to make this generic and let the consumer gives
the control of changing the structure of the table , order of the table etc. I have combined it with the styled-components. As it was mentioned that it is one of the bonus point otherwise I would have use SCSS. 





