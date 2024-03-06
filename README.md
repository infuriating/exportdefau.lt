# Svelte App

This is my first svelte app, I am using it to learn the basics of svelte and to get a feel for how it works.

## The Application

The application is a simple application that uses the lanyard API to get the current activity of a user. The user is specified by their discord user id.

Using the Sveltefire library, I am able to put users onto a firebase database and then get the user from the database, using a slug, to display their current activity.

### API URL

    https://lanyard.rest/v1/users/:userid

To use this you need to be in a specific discord server for them to be able to get the information. Here is the discord server link:

    https://discord.gg/lanyard
