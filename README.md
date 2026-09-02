# 🏍️ VELOCITY — Premium Bike Showroom

A modern, responsive and interactive **Bike Showroom Frontend Website** built using **HTML, CSS and JavaScript**.

The website is designed to showcase different motorcycles in individual card-based layouts along with their specifications, pricing and details.

---

## 🌐 Project Overview

**VELOCITY** is a fictional premium motorcycle company website created to provide users with a modern digital bike-shopping experience.

Users can:

* Explore different bike models
* View bike specifications
* Search for bikes
* Filter bikes by category
* Open detailed bike information
* Book a test ride
* Browse the website on desktop, tablet and mobile devices

---

## ✨ Features

### 🏠 Hero Section

* Premium landing section
* Company branding
* Attractive headline
* Call-to-action buttons
* Large motorcycle showcase image

### 🏍️ Bike Showcase

Each bike is displayed in an individual card containing:

* Bike image
* Bike name
* Category
* Description
* Engine capacity
* Power
* Mileage
* Top speed
* Starting price
* View Details button

### 🔎 Search Functionality

Users can search for bikes by:

* Bike name
* Bike category

Example:

```text
Search: Velocity X1
Search: Sport
Search: Cruiser
```

### 🏷️ Category Filters

Available categories:

* All
* Street
* Sport
* Cruiser
* Adventure

### 📋 Bike Details Modal

Clicking **View Details** opens a popup containing:

* Engine
* Power
* Mileage
* Top Speed
* Torque
* Fuel Capacity

### 🧪 Test Ride

The website includes **Book a Test Ride** buttons for users interested in scheduling a ride.

### 📱 Responsive Design

The website is responsive and works across:

* Desktop
* Laptop
* Tablet
* Mobile

### 🎨 Modern UI

The interface includes:

* Dark theme
* Red accent color
* Card-based design
* Hover effects
* Smooth scrolling
* Animations
* Responsive layouts

---

## 🛠️ Technologies Used

| Technology   | Purpose                         |
| ------------ | ------------------------------- |
| HTML5        | Website structure               |
| CSS3         | Styling and responsive design   |
| JavaScript   | Interactivity and functionality |
| Google Fonts | Typography                      |
| Unsplash     | Demo motorcycle images          |

---

## 📂 Project Structure

```text
bike-showroom/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the complete structure of the website including:

* Navbar
* Hero section
* Statistics
* Bike cards
* About section
* CTA section
* Footer
* Bike details modal

### `style.css`

Contains:

* Layout styling
* Colors
* Typography
* Card designs
* Animations
* Hover effects
* Responsive media queries

### `script.js`

Handles:

* Bike filtering
* Search functionality
* Bike details modal
* Test ride message
* Smooth scrolling
* Mobile navigation

---

## 🏍️ Available Bike Models

The current demo version contains:

| Bike             | Category  | Engine |   Power | Mileage | Top Speed |
| ---------------- | --------- | -----: | ------: | ------: | --------: |
| Velocity X1      | Street    | 155 CC | 18.4 HP | 48 KM/L |  130 KM/H |
| Velocity R7      | Sport     | 689 CC |   73 HP | 22 KM/L |  210 KM/H |
| Velocity Classic | Cruiser   | 349 CC |   20 HP | 35 KM/L |  120 KM/H |
| Velocity Terra   | Adventure | 450 CC |   40 HP | 30 KM/L |  165 KM/H |
| Velocity S5      | Street    | 250 CC |   28 HP | 40 KM/L |  145 KM/H |
| Velocity ZX      | Sport     | 998 CC |  150 HP | 18 KM/L |  299 KM/H |

> **Note:** The bike specifications and prices in this project are demo data created for frontend demonstration purposes.

---

## 🚀 How to Run the Project

### Step 1 — Clone or Download

Download the project or clone the repository.

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2 — Open the Project

Open the project folder in **Visual Studio Code**.

### Step 3 — Run the Website

You can simply open:

```text
index.html
```

Or, for a better development experience, install the **Live Server** extension in VS Code.

Then:

```text
Right Click → Open with Live Server
```

The website will open in your browser.

---

## 🔍 How the Website Works

### Bike Filtering

JavaScript checks the selected category and displays only the matching bike cards.

```javascript
filterBikes("sport");
```

### Bike Search

The search functionality compares the user's input with:

```text
Bike Name
Category
```

and hides bikes that don't match.

### Bike Details

Bike information is stored in a JavaScript object:

```javascript
const bikes = {
    "Velocity X1": {
        engine: "155 CC",
        power: "18.4 HP",
        mileage: "48 KM/L",
        speed: "130 KM/H"
    }
};
```

When the user clicks **View Details**, the corresponding information is displayed in the modal.

---

## 🎯 Project Objectives

The main objectives of this project are:

1. Create a modern bike-company website.
2. Practice frontend web development.
3. Implement responsive web design.
4. Learn DOM manipulation using JavaScript.
5. Implement search and filtering functionality.
6. Create reusable card-based UI components.
7. Improve UI/UX design skills.

---

## 🔮 Future Improvements

The project can be expanded with the following features:

### 👤 User Authentication

* Login
* Signup
* User profile
* Forgot password

### ❤️ Wishlist

Users can save their favorite bikes.

### ⚖️ Bike Comparison

Users can select multiple bikes and compare:

* Price
* Engine
* Power
* Mileage
* Top speed
* Features

### 🛒 Booking System

Users can:

* Select a bike
* Select a date
* Select a time
* Submit a test ride request

### 📍 Dealer Locator

Show nearby dealerships using maps.

### 💳 Online Booking

Add online bike booking and payment functionality.

### 🔧 Backend Integration

A backend can be added using technologies such as:

```text
Node.js
Express.js
MongoDB
```

### 📊 Admin Dashboard

An admin can:

* Add bikes
* Update bike information
* Delete bikes
* Manage bookings
* View customers

---

## 📸 Screenshots

Add screenshots of your website here after running the project.

Example:

```text
screenshots/
│
├── home.png
├── bikes.png
├── details.png
└── mobile.png
```

Then they can be displayed in this README using:

```markdown
![Homepage](screenshots/home.png)
```

---

## 📚 Learning Outcomes

By completing this project, you can demonstrate knowledge of:

* HTML5
* CSS3
* Flexbox
* CSS Grid
* Responsive Web Design
* JavaScript
* DOM Manipulation
* Event Handling
* Search Functionality
* Filtering
* Modal Components
* UI/UX Design

---

## 👩‍💻 Author

**Kritika Kumari**

B.Tech — Computer Science & Engineering
Artificial Intelligence & Data Science

---

## 📄 License

This project is created for **educational and portfolio purposes**.

The motorcycle names, specifications and pricing used in the demo are fictional and should not be treated as official manufacturer information.
