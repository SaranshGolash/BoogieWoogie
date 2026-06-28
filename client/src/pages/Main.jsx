import NavBar from "../components/NavBar";

function Main() {
    return (
        <>
            <NavBar businessName={"Boogie Woogie"} links={[
                {href: "/about", text: "About"},
                {href: "/contact", text: "Contact"},
            ]}/>
        </>
    );
}

export default Main;