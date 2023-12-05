This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### To run the code locally

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### To visualise the deployed application

Navigate to [https://sylvera-test.vercel.app/](https://sylvera-test.vercel.app/).


## Technical details
This project's goal is to display a list of projects and, in turn, present a table of details regarding each of these projects.
Below you can find some of the technical details regarding the project from wireframes, to implementation details and further steps.

### How it works
1. Main page
- Navigating to `https://sylvera-test.vercel.app/projects` reveals the page which contains a list of all the available projects.

2. Details page
- When clicking on any of this projects in the list, the application redirects the user to `https://sylvera-test.vercel.app/projects/{project_name}/details`. Here, the number of entries in the table are displayed alongside with other relevant details about the project and each of the top 10 entries.
- You can you the `Return to projects` button to navigate back to the main page.

### Wireframes
The following wireframes have been created and used in order to get a better visualisation of the application.
| First route  | Second route |
| ------------- | ------------- |
| <img width="542" alt="Screenshot 2023-12-05 at 02 13 19" src="https://github.com/andreea21ungureanu/sylvera-test/assets/21296057/2c82f5a9-eb02-465f-bac3-2c609dd78618"> | <img width="546" alt="Screenshot 2023-12-05 at 02 13 27" src="https://github.com/andreea21ungureanu/sylvera-test/assets/21296057/fd572380-a4ab-4678-a95f-2597aadc1975"> |

### Components
The components have been separated in a  `/components` folder at the root and represents the main elements on the page.
A single `layout` is being used to conserve the header and banner of the page.
The pages generated for the second route have a dynamic parameter that allows the name of the project to be added to the route.

### Styling
Tailwind CSS has been used for styling.

### Accesibility
The components are tagged semantically depending on the type of component they represent. Additional `aria-label`s have been added to components which take advantage of styling.

### Data Handling
The data comes from [https://pm25.lass-net.org/API-1.0.0/project/all/](https://pm25.lass-net.org/API-1.0.0/project/all/). 

The fetch requests are cached using the Next.js data cache. The revalidation period is set to 24 hours to ensure the data updates from the API infrequently.

### Error
Error handling is set for two main cases:
1. A project exists in the list, but there are no entries associated with it.
2. A project doesn't exist

### Testing
Example tests have been added for two type of components:
1. A React component
2. A file using the fetch API

### Further steps
The application is fully functional, but there are few improvements that come to mind:
1. Pagination for projects on the list page and entries on the details page
2. Data revalidation for more frequently updating data
3. Improve design
4. More focus on loading states
5. More focus on the mobile version of the application

