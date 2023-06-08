Project Proposal
-------------------
What is your projects goal and purpose?
------------------
- Success Journal

The goal and purpose of a Success Journal API inspired by the books of Napoleon Hill, James Allen, and Joseph Murphy would be to provide a digital platform to journal their thoughts, reflections, and goals, following the principles discussed in the book. The goal is to facilitate personal growth, self-reflection, goal tracking by providing a digital journaling experience with features like organization, searchability, reminders, and integrations to enhance the journaling process.

The Success Journal API aims to combine the principles and techniques from the books of these authors with the benefits of digital technology, providing users with a convenient tool to enhance their self-reflection, goal achievement, and personal empowerment.

-Clarity and Focus
-Positive Mindset and Attitude:
-Self-Reflection and Awareness
-Visualization and Affirmation
-Tracking Progress
-Personal Empowerment

-------------------
Project name and description
Be sure to name your project something that makes sense!
-------------------
Success Journal
-------------------
App Display Ideas:

The app's display can include a user interface that allows users to view their journal entries in a list or grid format. Each entry can be displayed with its title, description, creation date, and tags. The interface can provide options to create new entries, update existing entries, and delete entries. Users can also search for entries using keywords or tags and receive reminders or notifications for specific entries.





-------------------
Data Model:
-------------------
Entry model:
title: 
The title of the journal entry.

description: 
The description or content of the journal entry.

createdAt:
 The timestamp indicating when the entry was created.


mood:
the emotional state or mood during journaling.

goals: 
 an array of goals or objectives associated with the journal entry.

accessibility: 

the accessibility level of the entry, which can be either 'public' or 'private'. The default value is set to 'private'.

automatedTracking: 

a boolean value indicating whether automated tracking and analysis are enabled for the entry. The default value is set to false.

reminders: 

an array of reminders associated with the entry. Each reminder consists of a time (the date and time of the reminder) and a message (the content of the reminder).

-------------------
- Digital Accessibility
- Automated Tracking and Analysis
- Reminders and Notification
-------------------
Display:
-------------------
-Dashboard Overview
-Entry Creation:
-Entry Listing and Search
-Entry Details and Visualization
-Reflection and Analysis
-Goal Setting and Tracking
-Visualization and Inspiration

-------------------

Will be using the method:
. MERN: Mongo db, Express, REACT, Node.js
------------------
use the provided sample entries and the Entry model to seed the database

Seeding Data:

-Create a separate file for seeding
-In seed file import the necessary dependencies
-Establish the MongoDB connection
-Define an array of sample journal entries
-Define an asynchronous function to seed the database with the sample entries
-Run the seed file using Node 

-------------------
Routes and models
Define your routes and what HTTP method they will be using
-------------------
- GET

/api/entries :

This route uses the HTTP GET method. Retrieves all journal entries.

- POST 

/api/entries :

 . This route uses the HTTP POST method. Creates a new journal entry.

- GET

/api/entries/:id  :

. This route also uses the HTTP GET method. Retrieves a specific journal entry by its ID.

- PUT 

/api/entries/:id:

 . This route uses the HTTP PUT method. Retrieves all journal entries.

- DELETE

/api/entries/:id : 

. This route uses the HTTP DELETE method. Deletes a specific journal entry.

-------------------
User Stories
Your user stories are a way to talk about your applications features in the following format:

-------------------
MVP Goals
These features are the minimum to get your application working.

-------------------
As a user, I can view all my journal entries.
As a user, I can create a new journal entry.
As a user, I can view the details of a specific journal entry.
As a user, I can update the title and description of a specific journal entry.
As a user, I can delete a specific journal entry.


-------------------
Stretch Goals
These are goals that you aspire to finish during this project.
-------------------
 
As a user, I can add tags to my journal entries for better organization and searching.
As a user, I can search for journal entries based on keywords or tags.
As a user, I can receive reminders or notifications for specific journal entries.
As a user, I can add attachments (images, files) to my journal entries.
As a user, I can set recurring reminders for journaling.
As a user, I can export my journal entries in different formats.
As a user, I can integrate the Success Journal API with external productivity tools or services.
As a user, I can collaborate and share specific journal entries with others.
As a user, I can track my progress towards goals and receive personalized insights.


-------------------
Reference:
-------------------
- Ultimate Success book by Napoleon Hill (Author), James Allen (Author), Joseph Murphy (Author)
