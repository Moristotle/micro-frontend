import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";
import PrimeVue from "primevue/config";

// Mount function to start up the app
const mount = (el) => {
	const app = createApp(Dashboard);

	app.use(PrimeVue);
	app.mount(el);
};

// If we are in development and in isolation,
// call mount immediately

if (process.env.NODE_ENV === "development") {
	const devRoot = document.getElementById("_dashboard-dev-root");

	if (devRoot) {
		mount(devRoot);
	}
}

// We are running through container
// and we should export the mount function

export { mount };
