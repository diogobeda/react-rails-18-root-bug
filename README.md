# Steps for reproducing

1. Install ruby dependencies
```
bundle install
```

2. Install js dependencies
```
yarn install
```

3. Setup sqlite db
```
rails db:create
rails db:migrate
```

4. Run the app
```
rails s
```

5. Click on the "Add timer" button

You should see the previously added timers reset their local state because the React root is being re-created and the following warning on the console:

```
Warning: You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.
```
