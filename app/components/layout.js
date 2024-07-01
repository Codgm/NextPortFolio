import Header from "./header";
import Footer from "./footer";

export default function Layout ({children}) {
    return (
        <div className=".bg-primary flex flex-col min-h-screen">
            <Header/>
            <div className="flex-grow display: grid place-items: center">{children}</div>
            <Footer/>
        </div>
    )
} 