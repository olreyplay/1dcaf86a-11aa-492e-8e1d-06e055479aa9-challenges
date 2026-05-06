# Task

Create a simple user profile that loads user data from an API function using `useEffect`.

The component must include:

1. A state variable called `user`. Its initial value must be `null`.

2. A `useEffect` hook.
   - Call the `fetchUser` function inside the effect.
   - Use `.then()` to receive the response.
   - Save the response into the `user` state using `setUser`.

3. If `user` is `null`, render a paragraph (`p` element). Its text content must be `Loading user...`.

4. If `user` exists, render:
   - A heading (`h2` element) that displays the user name.
   - A paragraph (`p` element) that displays the user job.
