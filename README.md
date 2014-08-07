# Occlussion Culling with React.js 
### Step 4
In which we create table and row components.
Notice that when data is passed to a child component, they become props of the component. They are no longer state and so they are immutable in that component. If any of them change, then the component will re-render. 

Some of the huge performance boosts from React come from the Virtual DOM. When the props of a component change, a new copy of the virtual DOM is created and diffed against the old copy. If any differences are found, than properties/attributes are updated in the real DOM. But the **minimal set** of changes will be made. So existing DOM nodes my actually be re-used and re-populated with new data with innerHTML as opposed to adding/removing entire nodes.

The app is working great so far. We see the state of the table change immediatly when the inputs are changed. But we can still only render on the order of 1000 rows and have them still update immediatley before the browser chokes. We can do better.  


### Credits
Inspired by an excellent  post from James Long called [Removing User Interface Complexity, or Why React is Awesome](http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome) and an [inspiring talk] by Laszlo Pandy about Immediate Mode rendering on the web(http://prezi.com/bubbzkhivh7d/immediate-mode-rendering-on-the-web/) 
