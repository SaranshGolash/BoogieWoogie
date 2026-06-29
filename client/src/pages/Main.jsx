import NavBar from "../components/NavBar";
import Button from "../components/Button";

function Main() {

    const mainHeadingStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexFlow: 'row wrap',
        gap: '20px',
        padding: '20px'
    };
    
    const headingContentStyle = {
        display: 'flex',
        flexFlow: 'column wrap',
        gap: '20px'
    };

    const headingStyle = {
        fontFamily: '"DM Sans", sans-serif, "Fraunces", serif, Menlo, monospace',
        fontSize: '48px',
        fontWeight: 'bold',
        color: 'hsl(24 60% 15%)'
    };

    const buttonDivStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexFlow: 'row wrap',
        gap: '20px'
    }

    const btnStyle1 = {
        background: 'hsl(24 85% 45%)',
        color: '#ffffff',
        border: 'none',
        borderRadius: '25px',
        padding: '15px 40px',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    };

    const btnStyle2 = {
        background: 'transparent',
        color: 'hsl(24 85% 45%)',
        border: '2px solid hsl(24 85% 45%)',
        borderRadius: '25px',
        padding: '13px 38px',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    };

    const onMouseEnter = (e) => {
        e.target.style.transform = 'translateY(-3px)';
        e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    };

    const onMouseLeave = (e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = 'none';
    };

    return (
        <>
            <NavBar businessName={"Boogie Woogie"} links={[
                {href: "/about", text: "About"},
                {href: "/contact", text: "Contact"},
            ]}/>
            <div className="main-heading" style={mainHeadingStyle}>
                <div className="heading-content" style={headingContentStyle}>
                    <h1 style={headingStyle}>Unbox the Magic of the Season.<br/><span style={{color: 'hsl(24 85% 45%)'}}>Celebrate Every Moment, Big or Small.</span></h1>
                    <span style={{color: 'hsl(24 30% 45%)', fontFamily: '"Noto Serif", serif', fontWeight: '400', fontSize: '20px' }}>Handpicked gifts and festive decor for all of life's celebrations. Find exactly what you need to make this season the most special one yet.</span>
                    <div className="button-div" style={buttonDivStyle}>
                        <Button btnStyle={btnStyle1} textBtn={"Explore Gifts ⟶"} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
                        <Button btnStyle={btnStyle2} textBtn={"Our Story"} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
                    </div>
                </div>
                <div className="heading-image"></div>
            </div>
        </>
    );
}

export default Main;