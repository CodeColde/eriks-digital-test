# Eriks Digital Test - Coded By Hayo Friese <hayo.friese@gmail.com> aka CodeColde

## Instructions
- Pull the repository.
- Run `npm install`.
- Run `npm start`.

## My work
1. Created a new react application using `npx create-react-app --template typescript`. Made use of typescript to demonstrate knowledge.
2. Created a folder structure based on the atomic pattern. Excluded templates due to the simple structure, but created a "page" folder.
3. Stole colors from the page provided and found a similar icon for the trash.
4. Took the API return and documented it in an entity. Split entities up for reusability.
5. Implemented `react-query` for a future-proofing approach to fetching and caching api calls.
6. Took components I have made before and applied them to the design (Header, useQueryHandler, to name a few).
7. Created the front-end.
8. Applied functionality
9. Applied slight responsiveness, but this would take another hour to fully implement. I work best with a design.

## Tradeoffs, conscious decisions, and goals
For this project, my main goal was to represent a single-page application with some long-term tools.
React Query is a good idea for caching API calls. It's overkill on a single-page application. For this particular service, caching isn't necessary, as the user most likely won't revisit this page, however React-Query conceptually helps a user visit product catalogues/info pages, where caching saves on loading times, hence its addition.
Atomic folder structure is nifty for projects that use a theme. I'm somewhat familiar but still exploring the definitions of molecules atoms and organisms. Since this is one page, it felt overkill to add template folder.
Redux was specifically omitted because maintaining global state is not of any concern in this platform. React-Query already caches the data, meaning if you were to navigate away and return to this page the data would already be waiting, and row click state + selected products state are uniform to the page. React Context might've been useful, but there weren't enough use cases provided to make it worth adding.
Made use of typescript to demonstrate knowledge of typescript. In this case, it would have been overkill as there isn't much data modification, and instead merely string representation of values, but for the sake of demonstration I felt it was useful to add.
Lastly, I ommitted unit testing. There isn't much data-manipulation. The only two are to extract the list of comparable keys and filtering out the one's I wouldn't need for the rows.