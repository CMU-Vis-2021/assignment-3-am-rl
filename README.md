# Assignment 3: Interactive Data Visualization
#### Alana Mittleman and Rob Lambeth
### Project goals
For Assignment 3 we chose to work with a Department of Corrections data set from New York City’s OpenData initiative. This data provides a daily summary of all currently-detained inmates in New York city, including several key demographic details for each inmate. It also contains “yes/no” data on what is known in New York as “Brad H. Status.” Following a 2003 settlement for a 1999 class action lawsuit against the city for insufficiently supporting inmates with mental health needs, New York’s Department of Corrections is now required to track which inmates have been diagnosed with a mental illness of some kind.
Our objective in this assignment was to help the user gain a better — and more human — understanding of who exactly has been charged with what crimes in New York City. In particular we hoped to help the user understand the relative frequency of each criminal charge, along with the breakdown of inmates for each charge by race, gender, and mental health status. We summarized this project’s objective with the following research question:

##### What are the relationships between criminal charge and NYC inmates’ race, gender, and mental health status?
 
### Design Decisions
We chose to use bar charts because we were dealing entirely with nominal data. It made sense to have each of the four charts appear similarly to make clear that they were all showing inmate counts, just grouped by different variables. 
The specifics of our interaction came down to what was technically doable for us, but it actually ended up aligning quite well with what we initially had in mind. We wanted the primary focus to be the distribution of top charges, and communicated that the other three charts were secondary, or children of the charge graph using the visual hierarchy of size and position. With that hierarchy in mind, it makes sense for the top and largest chart to filter the other 3. The interaction also reflects the structure of our research question, which was related to the demographics of inmates by top charge. 
An alternative we considered was to have drop down menus where users could choose the filtering parameters directly, such as top charge, race, gender, etc. We moved away from this idea because it did not seem to be technically in scope. However, we ended up with a similar display of information. 

### Development Process
We estimate that we spent between 25 and 30 hours on this assignment collectively. 
We both experienced a very steep learning curve at the beginning of the project, so something that took up a lot of time was just learning how the vegalite in observable syntax we were familiar with translated to the syntax required by javascript. With limited understanding of the tools Vega would provide us with, we started out with a fairly vague idea of what the final visualization would look like and then hit some interruptions in how much time we were able to commit to the project.
At the end of the day, we took turns chipping away at understanding how to create something that would reflect our original goal, eventually getting a wonderful example of how signals in one Vega chart could update that of another and effectively used this to filter data in our charts by the top charge committed by each inmate. 

