// i18n
import "./locales/i18n";

// scroll bar
import "simplebar-react/dist/simplebar.min.css";
import "simplebar/dist/simplebar.css";

import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

// @mui
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { HelmetProvider } from "react-helmet-async";

import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

// routes
import Router from "./routes";

// theme
import ThemeProvider from "./theme";

// locales
import ThemeLocalization from "./locales";

//components
import ScrollToTop from "./components/scroll-to-top";
import { BaseOptionChartStyle } from "./components/chart/BaseOptionChart";
import SnackbarProvider from "./components/snackbar";
import { MotionLazyContainer } from "./components/animate";
import { ThemeSettings, SettingsProvider } from "./components/settings";

//auth provider
import { AuthProvider } from "./auth/JwtContext";

const App = () => {
	return (
		<React.StrictMode>
			<AuthProvider>
				<HelmetProvider>
					<ReduxProvider store={store}>
						<PersistGate persistor={persistor}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<SettingsProvider>
									<BrowserRouter>
										<ScrollToTop />
										<MotionLazyContainer>
											<ThemeProvider>
												<ThemeSettings>
													<ThemeLocalization>
														<SnackbarProvider>
															<BaseOptionChartStyle />
															<Router />
														</SnackbarProvider>
													</ThemeLocalization>
												</ThemeSettings>
											</ThemeProvider>
										</MotionLazyContainer>
									</BrowserRouter>
								</SettingsProvider>
							</LocalizationProvider>
						</PersistGate>
					</ReduxProvider>
				</HelmetProvider>
			</AuthProvider>
		</React.StrictMode>
	);
};

export default App;
