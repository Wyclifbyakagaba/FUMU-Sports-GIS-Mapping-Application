# FUMU Sports GIS Mapping Application

## Project Description

The **FUMU Sports GIS Mapping Application** is an interactive web-based Geographic Information System (GIS) application developed for CSE310 Module 3.

The application displays sports locations on an interactive map of Uganda. Users can click map markers to view information about sports locations and use a filter to display locations for a specific sport.

## Purpose

The purpose of this application is to demonstrate how GIS technology can be used to organize and visualize sports-related location data.

The application helps users:

* View sports locations on an interactive map.
* Identify different sports locations.
* Click markers to view additional information.
* Filter locations by sport.
* See the number of locations currently displayed.

## GIS Features

## 1. Interactive Map

The application uses **Leaflet** to create an interactive map.

Users can:

* Zoom in and out.
* Move around the map.
* Select individual locations.
* View location information.

## 2. Map Markers

The application contains **24 sports location markers**.

The markers represent four sports:

* Football
* Basketball
* Tennis
* Athletics

The application therefore meets the requirement for at least 20 map markers.

## 3. Marker Popups

When a user clicks a marker, a popup displays useful information including:

* Sports location name
* Sport
* City
* Area
* Description of the location

## 4. Sport Filter

The application includes a filter that allows users to select:

* All Sports
* Football
* Basketball
* Tennis
* Athletics

When a sport is selected, only the matching locations are displayed on the map.

## 5. Reset Map

The Reset Map button returns the application to the original view and displays all sports locations again.

## 6. Marker Counter

The application displays the number of locations currently visible on the map.

## Technologies Used

The project uses:

* HTML5
* CSS3
* JavaScript
* Leaflet JavaScript mapping library
* OpenStreetMap

## Project Files

```text
FUMU-Sports-GIS-Mapping-Application/
│
├── index.html
├── styles.css
├── app.js
├── README.md
├── requirements.txt
├── .gitignore
│
└── data/
    └── sports_locations.csv
```

## File Descriptions

## `index.html`

Contains the structure of the web application, including:

* Page heading
* Sport filter
* Reset button
* Map container
* Instructions
* Leaflet library references

## `styles.css`

Controls the appearance of the application, including:

* Header
* Controls
* Map
* Instructions
* Footer
* Mobile layout

## `app.js`

Contains the main GIS functionality.

It:

* Creates the Leaflet map.
* Stores sports location data.
* Creates 24 markers.
* Creates marker popups.
* Creates the sport filter.
* Filters markers.
* Counts visible locations.
* Resets the map.

## `data/sports_locations.csv`

Contains the sports location dataset with fields for:

* Name
* Sport
* City
* Area
* Latitude
* Longitude
* Information

## How to Run the Application

## Option 1: VS Code Live Server

1. Open the project folder in VS Code.
2. Open `index.html`.
3. Install the **Live Server** extension if it is not already installed.
4. Right-click `index.html`.
5. Select **Open with Live Server**.
6. The application will open in a web browser.

## Option 2: Open in a Browser

The `index.html` file can also be opened directly in a modern web browser.

An internet connection is recommended because Leaflet and OpenStreetMap resources are loaded from the internet.

## How to Use the Application

1. Open the application.
2. View the sports locations on the map.
3. Click any marker.
4. Read the information in the popup.
5. Select a sport from the filter.
6. Observe that only locations for the selected sport remain visible.
7. Click **Reset Map** to display all locations again.

## Data

The project contains 24 demonstration sports locations distributed across Uganda.

The dataset includes four sports:

| Sport      | Number of Locations |
| ---------- | ------------------: |
| Football   |                   6 |
| Basketball |                   6 |
| Tennis     |                   6 |
| Athletics  |                   6 |
| **Total**  |              **24** |

The coordinates are included to demonstrate the GIS mapping functionality. Any location that is presented as a real-world sports facility should be verified before the application is used outside the classroom.

## Learning Outcomes

Through this project, I practiced:

* Creating an interactive GIS map.
* Working with latitude and longitude coordinates.
* Creating map markers.
* Creating marker popups.
* Filtering geographic data.
* Organizing data in a CSV file.
* Using JavaScript functions.
* Working with an external mapping library.
* Testing an interactive web application.
* Documenting a software project.

## Testing

The application should be tested to confirm that:

* The map loads correctly.
* All 24 markers appear.
* Clicking a marker opens a popup.
* The popup displays the correct information.
* The sport filter works.
* The marker count changes when filtering.
* The Reset Map button displays all locations.
* The application works on different screen sizes.

## Video Demonstration

**Video Link:** ADD-YOUR-VIDEO-LINK-HERE

The demonstration video should show:

1. My face and introduction.
2. The running GIS application.
3. The 24 map markers.
4. Clicking a marker and displaying its popup.
5. Using the sport filter.
6. Resetting the map.
7. A walkthrough of important sections of the code.

## GitHub Repository

**GitHub Repository:** ADD-YOUR-GITHUB-REPOSITORY-LINK-HERE

The repository should be public so the instructor can review the project files.

## Author

**Wycliff Byakagaba**

**Course:** CSE310

**Module:** Module 3 - GIS Mapping
