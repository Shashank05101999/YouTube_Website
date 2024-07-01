1. what is Higher-Order Components ?

ans=>1 Concretely, a higher-order component is a function that takes a component and returns a new component.A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API,

2. what is Debouncing concept?
   Ans=> It is when you search on Youtube the time you search and that time api hits at very less time that concepts of search is knowns debouncing.

Example: flipkart search check

Typing slow = 200ms(it will take hole word you enter in search)

Typing Fast= 30ms(It will take the fews words in search)

performance:
-typing in search:iphone pro max=14 letter *1000 =14000
with debouncing = 3 API calls *1000 =3000

Debouncing with 200ms-
-if difference between 2 key strokes is <200ms - Decline API
-200ms make an

3. expalin the search type autocomplete works example in YOUTUBE?
Ans=>
1) key(enter in search box) - i
   - render the compontent
   - useEffect()
   - start timer => make  api call  after  200ms

2) key(enter in search box)-ip
   - destroying the component(useEffect return method)
   - re-render the component
   - useEffect()
   - start Timer(200) -make  an API call  