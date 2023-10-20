import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Title from './components/Title';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Header />
			<div class='main-content'>
				<Title />
				<AboutMe />
				<Skills />
				<Experience />
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default App;
