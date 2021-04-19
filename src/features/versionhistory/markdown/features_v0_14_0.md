Version v0.14.0: Apr 2, 2021
## Improvements

### Major
* Routing - each section on it's own page - those pages can be bookmarked

### Minor
* New menu choices for Home and Projects

### Internal
* import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";
* New About class grouping 2 about sections
* with or without banner passed into navigation menu based on the page
* HeaderBar class no longer used
* new Navigation class for all menus
* FeatureList class renamed to Project
* new Home class that serves at Home page with banner, projects, version history, and also for the projects page (no banner or version history)

### Known Bugs / Restrictions
* Home class has an issue in the console