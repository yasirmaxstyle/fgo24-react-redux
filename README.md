# FORM HANDLING IN REACT
This program utilize `react-hook-form` to handle form in React and `yup` for validation and sanitation. The program will show error messages when input is not valid. As well as input that need other follow-up input, the follow-up input will be disabled when in initial choice is 'no'.
### Preview demo of dependent follow-up input
[demo-input-followup.webm](https://github.com/user-attachments/assets/783b7ec4-b3e0-46ca-925a-b8e3b21d1e69)

## HOW TO TRY THIS PROGRAM
1. Clone this project
```sh
git clone https://github.com/yasirmaxstyle/fgo24-react-redux
```
2. Get into the path
```sh
cd fgo24-react-redux
```
3. Install NPM
```sh
npm install
```
4. Run in dev mode
```sh
npm run dev
```
5. Your app will run in http://localhost:5173, since it is built with Vite

### Using Docker
1. Clone this project
```sh
git clone https://github.com/yasirmaxstyle/fgo24-react-redux
```
2. Get into the path
```sh
cd fgo24-react-redux
```
3. Build image
```bash
docker build . -t form:latest
```
4. Run image with docker
```bash
docker run -p 8080:80 -d form:latest
```
5. Visit your app in http://localhost:8080

## TECHNOLOGIES
- [React JS](https://react.dev/)
- [Vite](https://vite.dev/)
- [NPM](https://www.npmjs.com/)
- [TailwindCSS](https://tailwindcss.com/)

## DEPENDENCIES
- [React-Router](https://www.npmjs.com/package/react-router)
- [React-Hook-Form](https://www.npmjs.com/package/react-hook-form)
- [Yup](https://www.npmjs.com/package/yup)
- [React-Toastify](https://www.npmjs.com/package/react-toastify)
- [ReduxToolkit](https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)

## How to take part in this project
You are free to fork this project, make improvement and submit a pull request to improve this project. If you find this useful or if you have suggestion, you can start discussing through my social media below.
- [Instagram](https://www.instagram.com/yasirmaxstyle/)
- [LinkedIn](https://www.linkedin.com/in/muhamad-yasir-806230117/)

## License
This project is under MIT License
