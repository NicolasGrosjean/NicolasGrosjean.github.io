# Nicolas Grosjean website
> Web site to show realizations

## Tasking Manager videos

The videos showing the evolution of a tasking manager project has been created with the
[Tasking manager stats GitHub project](https://github.com/NicolasGrosjean/tasking_manager_stats)

## Web site creation

### Data

Data are extracted from CartONG internal data and are processed with
`prepare_data.py` script.

### Javascript

To generate javascript for the website, you need to run the
[JSX preprocessor](https://reactjs.org/docs/add-react-to-a-website.html#run-jsx-preprocessor).

Once the setup is done in the `js` directory, simply run the following command :

```
cd js/
npx babel --watch src --out-dir . --presets react-app/prod
```

### Testing
```
python -m http.server 8080
```

Go to your web browser to `http://127.0.0.1:8080/`

## Credits

Images and CSS code is from [CartONG Mapathon Dashboard](http://mapathon.jmartin.tf/)