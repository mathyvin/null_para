import BankingPage from "./pages/BankingPage";
import HomeChildrenPage from "./pages/HomeChildrenPage";
import LearnPage from "./pages/LearnPage";
import SavingChildrenPage from "./pages/SavingChildrenPage";
import SettingsPage from "./pages/SettingsPage";
import { IRoutes } from "./interfaces/IRoutes";
import HomeParentsPage from "./pages/HomeParentsPage";

export const routesChildren : IRoutes[] = [
        {'url': '/', 'component': HomeChildrenPage, name: "Home"},
        {'url': '/saving', 'component': SavingChildrenPage, name: "Saving"},
        {'url': '/learn', 'component': LearnPage, name: "Learn"},
        {'url': '/banking', 'component': BankingPage, name: "Banking"},
        {'url': '/settings', 'component': SettingsPage, name: "Settings"}    
    ];

    export const routesP : IRoutes[] = [
        {'url': '/', 'component': HomeParentsPage, name: "Home"},
        {'url': '/saving', 'component': SavingChildrenPage, name: "Saving"},
        {'url': '/learn', 'component': LearnPage, name: "Learn"},
        {'url': '/banking', 'component': BankingPage, name: "Banking"},
        {'url': '/settings', 'component': SettingsPage, name: "Settings"}    
    ];