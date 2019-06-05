# Software engineering project DAT256
## Group Tangela
Hoi is a service for peer-to-peer bike rentals, in the form of a web application developed with React.

### Structure of the repository
There are three top-level directories:
* **Documentation** - contains personal reflections, team reflections, UI mockups, our social contract, definition of done, business model canvas and project description.
* **project** - contains the application. The *client* directory is where most of the code is located.
* **gitinspector** - contains the statistics obtained from gitinspector.

### Git information
The list below shows how the group members correspond to the usernames.

| Name of member  | Username(s) shown in gitinspector |
|-----------------|-----------------------------------|
| Jesper Berglind | Jesper Berglind, Slarvsylt        |
| Henrik Edstrand | henrikedstrand                    |
| Edvin Leidö     | Edvin Leidö                       |
| Ivan Lesnukhin  | ivanlesnukhin                     |
| Karin Sjödin    | karinsjodin                       |
| Carlos Yechouh  | carcoke                           |

### Scrum board
Our scrum board is available here: https://trello.com/invite/b/2xGRDjSy/492fce07dfbd9748abceeaa8f282496d/scrum-board


### Running the application
To run our application, you need to have npm installed. After this is done, follow these steps:
1. Navigate to the project directory and run the terminal command `npm install`.
2. Navigate to the client directory (project/client), and run `npm install` there as well.
3. Navigate back to the project directory and run the command `npm run start`. This should start the app at localhost:3000, with a server backend at localhost:5000.

To turn the server and app off, press CTRL+C in the terminal where `npm run start` was entered.
## Acknowledgements
* Calendar functionality provided by Airbnb's [react-dates](https://github.com/airbnb/react-dates) library.
* Map functionality provided by OpenStreetMap (© OpenStreetMap contributors), using the [Leaflet](https://leafletjs.com/) library along with [react-leaflet](https://react-leaflet.js.org/).
* Payment solution provided by Stripe's [react-stripe-elements](https://github.com/stripe/react-stripe-elements) library.