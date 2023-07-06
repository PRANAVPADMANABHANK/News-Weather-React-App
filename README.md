PROJECT NAME: News Aggregator with Weather Information React Application

PROJECT LINK: https://news-weather-info.netlify.app

Introduction:

The Local Language News Aggregator with Weather Information is a web application developed using React and Redux. It combines news aggregation functionality with real-time weather updates based on the user's geolocation. The project aims to deliver a personalized and informative experience to users, allowing them to stay updated on the latest news articles while being aware of the current weather conditions, including a forecast for multiple days.


Prepared By:
This project was prepared by Pranav K. You can contact me at pranavkkeloth@gmail.com.


Key Features

News Aggregation


The application integrates with a popular news API, such as newsapi.org, to fetch news articles. It offers advanced filtering options that allow users to search for news articles based on their query and language preferences. Additionally, the application provides sorting functionality to organize the articles based on the date published.


Weather Information


The application leverages the OpenWeatherMap API to fetch both the current weather and weather forecasts based on the user's location. It utilizes the OpenWeatherMap API to retrieve real-time weather data such as temperature, weather conditions, humidity, and more. Additionally, the RapidAPI platform is employed to access information about various cities, allowing users to obtain weather details for different locations.


Infinite Scrolling

Implementation of infinite scrolling to facilitate seamless browsing of news articles without the need for pagination.
Articles load dynamically as the user scrolls, providing a continuous flow of content.

Routing

The application utilizes routing features, such as React Router, to enable seamless navigation between different pages, including the news page and weather page. This allows users to switch between sections without refreshing the entire page, resulting in faster transitions and a more responsive user experience. The routing functionality preserves application state, supports bookmarking and sharing of URLs, and facilitates dynamic data passing between pages. Overall, routing enhances usability by providing quick and smooth access to specific sections of the application.

Responsive Design

The application features a responsive layout that adapts to various screen sizes and devices.
Utilization of responsive design techniques, CSS frameworks for optimal user experience.

Language Preference

Users can select their preferred language for news articles.
A confirmation dialog is displayed using the window.confirm() method to ensure the user wants to change the language, enhancing user control and experience.

Error Handling and Validation

Robust error handling mechanisms for API requests and responses, ensuring a smooth user experience even in case of failures.
Thorough validation of user inputs, such as search queries and language preferences, to maintain data integrity and provide meaningful feedback.

Code Organization and Documentation

The codebase follows a modular and component-based structure, promoting reusability and maintainability.
Detailed code comments and documentation explaining the purpose and functionality of components, functions, and major code blocks.

Version Control and Collaboration

Git is used for version control, allowing efficient collaboration, code review, and easy tracking of changes.
Best practices for Git commits, including clear and descriptive commit messages, are followed.


Developer’s Perspective

In the project, there are two main pages: the homepage and the weather page.

Homepage:

The homepage is represented by the Home function component. It imports the necessary React components, such as Navbar, Search, Filter, and FetchNews. The Navbar component represents the navigation bar of the application. The Search component allows users to search for news articles based on their preferences. The Filter component provides advanced filtering options based on the language. The FetchNews component is responsible for fetching and displaying the news articles. The homepage is structured using the ‘<> </>’ fragment syntax to wrap all the components together.

Weather Page:

The weather page is represented by the Weather function component. It imports React and the necessary components like Navbar, SearchCountry, CurrentWeather, Heading, and Forecast. Additionally, it imports the WEATHER_API_KEY and WEATHER_API_URL from the api.js file. The Navbar component represents the navigation bar, and the Heading component displays a heading for the weather section. The SearchCountry component allows users to search for a specific country to get its weather information. The CurrentWeather component displays the current weather data, and the Forecast component shows the weather forecast for each day. The Weather component also uses the useBeforeUnload custom hook to display a confirmation message when the user tries to refresh the page. The handleOnSearchChange function handles the search functionality and makes API calls to retrieve the current weather and forecast data based on the selected country. The retrieved data is stored in state variables currentWeather and forecast, which are then rendered conditionally in the JSX markup.

Both pages share the Navbar component, which provides consistent navigation throughout the application.


Overview of all the components provided:


1.CurrentWeather Component:

This component displays the current weather information.
It receives a data prop, which contains the weather data to be displayed.
If the data is not available or empty, it shows a loading state.
It renders the city name, weather description, weather icon, temperature, and additional weather details like wind speed, humidity, and pressure.

2.FetchNews Component:

This component fetches and displays news articles.
It uses Redux to manage state and dispatches the fetchNews action to retrieve news data.
It displays a loading state using the BeatLoader component from the react-spinners library while the news data is being fetched.
Once the data is fetched, it renders a list of articles with their respective title, source, author, and publication date.
Clicking on an article opens the article URL in a new tab.

3.Filter Component:

This component provides a language filtering functionality for the news articles.
It maintains a list of languages and a selected language filter in its state.
Clicking on the filter input displays a dropdown with language options.
Selecting a language triggers a confirmation prompt and dispatches the fetchNews action with the selected language code to update the news data.

4.Forecast Component:

This component displays the weather forecast for the upcoming days.
It receives a data prop, which contains the forecast data to be displayed.
It renders a list of accordion items, each representing a day in the forecast.
Each accordion item shows the day, weather description, weather icon, temperature range, and additional weather details like pressure, humidity, clouds, wind speed, sea level, and feels like temperature.
Clicking on an accordion item expands the item to reveal the detailed weather information.

5.Heading Component:

This component displays the heading for the weather information section.
It renders a simple heading text.

6.Navbar Component:

This component represents the navigation bar at the top of the page.
It displays the title of the application and a link to the weather information section.

7.Search Component:

This component provides a search input to search for news articles based on a search term.
It maintains a search term in its state and dispatches the searchNewsByTerm action when the search form is submitted.
It renders an input field and a search button, allowing users to enter a search term and submit the form.

8.SearchCountry Component:

This component provides a search functionality to select a specific country for weather information.
It uses the AsyncPaginate component from the react-select-async-paginate library.
The component performs an asynchronous search for cities based on the user's input and displays the search results as options in a dropdown.
When the user selects a city, it updates the component's state and triggers a callback function (onSearchChange) to handle the selected search data.


Overview of the redux folder:


Redux Folder:
 A Redux folder in this project. This folder is used to organize Redux-related code and functionality.

Store Configuration:
Inside the Redux folder, there is a store.js file. This file is responsible for configuring and creating the Redux store using the configureStore function from the @reduxjs/toolkit package.

Slice Folder:
Within the Redux folder, there is a subfolder named "Slice." This folder likely contains separate files for defining different slices of the Redux state.

News Slice File:
Inside the "Slice" folder, there is a file called news.js. This file defines the news slice of the Redux state.

News Slice Definition:
The news.js file uses the createSlice function from the @reduxjs/toolkit package to define the news slice. The createSlice function takes an object as its argument, which includes the name of the slice, initial state, reducers, and extra reducers.

Initial State:
The initial state of the news slice is defined within the initialState property of the slice. It includes properties such as isLoading, data, language, and term. These properties represent the initial values of different aspects related to news in the Redux state.

Reducers:
The news slice defines two reducers: addLang and searchNews. Reducers are functions that handle state updates in response to dispatched actions. The addLang reducer updates the language property in the state, while the searchNews reducer updates the term property.

Extra Reducers:
The news slice also includes extra reducers defined using the extraReducers property. These reducers handle asynchronous actions using the createAsyncThunk function.

Async Thunk Actions:
Within the news slice, there are two async thunk actions: fetchNews and searchNewsByTerm. These actions are created using the createAsyncThunk function. They handle asynchronous operations like fetching news articles and searching for articles based on a provided term. These thunks dispatch actions with different states (e.g., pending, fulfilled, rejected) based on the progress and outcome of the asynchronous operations.

Export:
The news.js file exports the defined actions and the reducer using the export statement, making them accessible to other parts of this application that need to interact with the news slice.


Overview of the api folder and .env file:


In this project, the code provided in the api.js file and the .env file is responsible for managing the API configurations and keys used in the application.

GeoDB API Configuration:
The geoApiOptions object contains the necessary headers and API key required to make requests to the GeoDB API. The X-RapidAPI-Key header is set to the value of REACT_APP_GEO_API_KEY from the .env file, which represents your RapidAPI key. The X-RapidAPI-Host header is set to "wft-geo-db.p.rapidapi.com" to specify the host for the API requests.

GeoDB API URL:
The GEO_API_URL constant holds the base URL endpoint for fetching cities from the GeoDB API. This URL will be used in conjunction with specific endpoints or query parameters to retrieve data about cities.

OpenWeatherMap API Configuration:
The WEATHER_API_URL constant represents the base URL endpoint for accessing weather data from the OpenWeatherMap API. This URL will be used to construct specific API requests for fetching current weather and day forecasting information.

OpenWeatherMap API Key:
The WEATHER_API_KEY constant contains your API key for the OpenWeatherMap service. This key is fetched from the .env file using REACT_APP_WEATHER_API_KEY. It allows you to authenticate and authorize requests to the OpenWeatherMap API, ensuring access to the weather data.

NewsAPI Key:
The NEWS_API_KEY constant stores the API key required for accessing the NewsAPI service. Similar to the OpenWeatherMap API key, this value is fetched from the .env file using REACT_APP_NEWS_API_KEY. It grants you access to the NewsAPI, allow to fetch news articles and related information.

Environment Variables:
The .env file in the project stores the values for the API keys. Each key is assigned a unique value, allowing you to keep sensitive information separate from your codebase. By using environment variables, easily switch API keys or update them without modifying the actual code files.

Overall, the api.js file and the .env file work together to provide a centralized location for managing API configurations and keys. This separation ensures security, flexibility, and ease of maintenance, as can modify the API settings without modifying the code that consumes those APIs.


Conclusion:

The Local Language News Aggregator with Weather Information project effectively combines news aggregation and weather updates to provide users with a comprehensive and personalized experience. With its intuitive user interface, responsive design, and advanced features such as infinite scrolling and language preference selection, the application offers a seamless browsing experience. The project demonstrates proficiency in React, Redux, API integration, and adherence to coding best practices.

The Local Language News Aggregator with Weather Information project serves as a testament to the ability to deliver high-quality software solutions. It showcases a strong understanding of frontend development concepts and the utilization of modern technologies to create impactful web applications.





