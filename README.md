## Browser Storage

- There is a Browser Storage API that allows web applications to store data locally within the user's browser. This can be useful for persisting user preferences, caching data, or storing session information.
- There are two main types of browser storage: Local Storage and Session Storage. 

### Local Storage

- Local Storage allows web applications to store data with no expiration date. 
- The data will persist even after the browser is closed and reopened. 
- It is useful for storing user preferences, settings, or any data that needs to be retained across sessions.
- Local Storage has a larger storage limit compared to cookies (typically around 5-10MB per domain).

### Session Storage

- Session Storage allows web applications to store data for the duration of the page session.
- The data is cleared when the page session ends, which typically occurs when the browser tab is closed or when the browser is closed.
- It is useful for storing temporary data that is only needed for the current session, such as form inputs or temporary state information.
- Session Storage has a smaller storage limit compared to Local Storage (typically around 5MB per domain).

There is also a third type of storage called Cookies, which can be used to store small amounts of data (typically up to 4KB) and can be sent to the server with every HTTP request. Cookies are often used for session management, user authentication, and tracking user behavior.