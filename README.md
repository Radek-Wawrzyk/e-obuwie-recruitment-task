# Eobuwie Front End Recruitment Task

Live version - https://eobuwie-recruitment-task.netlify.app/

#### Project description

Regarding to the JavaScript architecture, I put emphasis on the maximum simplicity - components with simple relations, splitted logic into smaller modules/components.

What is worth to say - validation made for this task is only for testing purposes. I was experimenting with creating my custom solution, but it is very limited.

In the terms of styles, I decided to use SCSS for application styles architecture. I split the logic into several small parts `(typography, layout, animations, variables etc)`. However, in the terms of component styles, I decided to write component's styles into corresponding dedicated SCSS file. Hence, we have the main styles for the application basics as well as custom dedicated styles for each component.

For displaying, managing and formatting dates I used `dayjs` library, which is great and it offers huge support for dates & dates operations while maintaing a small size (compared to )

The most important components are part of `BaseCalendar directory`. List of all BaseCalendar components with small description:

- **BaseCalendarDay** - Part of the BaseCalendar components. BaseCalendarDay does have very basic logic. Its usability is related to `@click events` and for `coloring the dates based on various props`.
  
- **BaseCalendarDates** - Part of the BaseCalendar components. BaseCalendarDates renders list of all days for current month. What is worth to say, that this component handles selecting dates `based on 2 props (dateStart, dateEnd)`. Component is emtiting `set-date-end & set-date-start` events based on received data from `BaseCalendarDay component`
  
- **BaseCalendarPicker** - Part of the BaseCalendar components. BaseCalendarPicker `triggers BaseCalendar` (open/close actions) + `displays selected dates` based on received props. Also it has error props message as `BaseInput component`
  
- **BaseCalendarHeader** - Part of the BaseCalendar components. BaseCalendarPicker displays current (active) month of the calendar component. Moreover it offers `changing prev/next month` based on button arrows (left/right)
  
- **BaseCalendarWeekDays** - Part of the BaseCalendar components. BaseCalendarWeekDays only displays week days (monday, friday etc). It doesn't has any logic
  
- **BaseCalendar** - The main component/part of the all BaseCalendar sub components. BaseCalendar collects all evets from child components (such a like `set-date-start, set-date-end, open-calendar`). Moreover, based on `dayjs` library, BaseCalendar fetchs all dates/months and renders it on the grid `(BaseCalendarDates)` . Crucial parts of this components are computed properties:
  
  - **daysBetween()** - Returns all dates between 2 selected dates
    
  - **days()** - Returns all days of current/prev/next months in the format of 35 days (if is possible). This computed getter is based on 3 smaller `(nextMonthDays, prevMonthDays, currentMonthDays)`
    
  
  Also what is important, BaseCalendar component has click `outside/ESC keypress support`.
  

Also I created few `Base` components for UI & architecture purposes. List of all base/reusable components (excluded `BaseCalendar`) with small description:

- **BaseButton** - One of the fundamental components. By props settings, BaseButton could render as `<button>`, `<a>` or `<router-link>` tag. Moreover it `type` for main styles + `disabled functionality`
  
- **BaseInput** - One of the the fundamental components. By props settings, BaseInput could contain `placeholder, label, type, name, disabled status or even error message`.
  
- **BaseReviews** - One of the side components. BaseReviews components handles rating data based on props. Also it uses `BaseStart` components for rendering stars based on rate value
  
- **BaseStar** - One of the side components. BaseStar has only one props (isFilled) and basically it only colours star icon based on isFilled value.
  
- **ReservationForm** - One of the most important components. ReservationForm contains all logic components required to render offer details + `it has BaseCalendar` for choosing book dates.
  

### Git flow/Continuous deployment

I didn't use any `git flow`, I created `develop` branch for developing & tests, and of course there is a `main` branch for stable version. Moreover, I used `netlify` for continuous deployment service.

### Technologies I used to create this task

- `HTML5/CSS3`
  
- `Sass (SCSS)`
  
- `JavaScript (ES6+)`
  
- `Vue.js`
  
- `Jest + @vue/test-utils`
  
- `Dayjs`
  
- `Yarn`
  
- `Webpack`
  

### Installation

```
npm install
yarn
```

### Start Dev Server

```
npm start
yarn serve
```

###

### Build Prod Version

```
npm run build
yarn build
```


### Run your unit tests
```
npm run test:unit
yarn test:unit
```

### Lints and fixes files
```
npm run lint
yarn lint
```