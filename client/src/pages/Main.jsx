import NavBar from "../components/NavBar";
import Button from "../components/Button";

function Main() {

    const mainHeadingStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexFlow: 'row wrap',
        gap: '20px',
        padding: '20px',
        paddingLeft: '120px',
        paddingRight: '60px'
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
    };

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

    const imgStyle = {};

    const impactSectionStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        padding: '40px 20px',
        background: 'hsl(24 85% 45%)',
        textAlign: 'center'
    };

    const statisticsStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '80px',
        marginTop: '20px',
        flexWrap: 'wrap'
    };

    const spanStyle = {
        color: 'white',
        fontSize: '38px',
        fontFamily: '"DM Sans", sans-serif, "Fraunces", serif, Menlo, monospace',
        fontWeight: 'bold'
    };

    const spanStyle2 = {
        color: 'color-mix(in oklab, hsl(0 0% 100%) 80%, transparent)',
        fontSize: '22px',
        fontWeight: '200'
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
                <div className="heading-image">
                    <img src="" alt="" style={imgStyle} />
                </div>
            </div>
            <div className="impact-section" style={impactSectionStyle}>
                <span style={spanStyle}>Real People, Real Impact</span>
                <span style={{...spanStyle, fontSize: '22px', color:'color-mix(in oklab, hsl(0 0% 100%) 80%, transparent)' ,fontWeight: '200', }}>We measure our success not just by numbers, but by the hands that help and the lives that are touched.</span>
                <div className="statistics" style={statisticsStyle}>
                    <span style={{...spanStyle, fontSize: '56px', fontWeight: '200'}}>500+<br /><span style={{...spanStyle, ...spanStyle2 }}>People Helped</span></span>
                    <br />
                    <span style={{...spanStyle, ...spanStyle2, fontSize: '100px', color:'color-mix(in oklab, hsl(0 0% 100%) 10%, transparent)', lineHeight: '150px'}}>|</span>
                    <br />
                    <span style={{...spanStyle, fontSize: '56px', fontWeight: '200'}}>50+<br /><span style={{...spanStyle, ...spanStyle2}}>Volunteers</span></span>
                    <br />
                    <span style={{...spanStyle, ...spanStyle2, fontSize: '100px', color:'color-mix(in oklab, hsl(0 0% 100%) 10%, transparent)', lineHeight: '150px'}}>|</span>
                    <br />
                    <span style={{...spanStyle, fontSize: '56px', fontWeight: '200'}}>₹100,000+<br /><span style={{...spanStyle, ...spanStyle2}}>Raised</span></span>
                </div>
            </div>
        </>
    );
}

export default Main;