function About() {

    const valueList = [
    {
        key: 1,
        title: 'Reasonable Rates',
        description: 'We offer competitive and transparent pricing without ever compromising on the quality of our work.'
    },
    {
        key: 2,
        title: 'Reliable Service',
        description: 'Our dedicated team ensures your projects are delivered on time, every time, to the highest standards.'
    },
    {
        key: 3,
        title: 'Right Approach',
        description: 'We take the time to deeply understand your unique needs and tailor our customized solutions accordingly.'
    },
];

    const aboutHeadingStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column nowrap',
        gap: '20px'
    };

    const ourValuesStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexFlow: 'row wrap',
        gap: '20px'
    };

    const valueContentStyle = {
        display: 'flex',
        flexFlow: 'column nowrap',
        gap: '20px'
    };

    const indexColors = [
        { color: 'hsl(98 32% 43%)', bg: 'color-mix(in oklab, hsl(98 32% 43%) 10%, transparent)' },
        { color: 'hsl(24 85% 45%)', bg: 'color-mix(in oklab, hsl(24 85% 45%) 10%, transparent)' },
        { color: 'hsl(221 83% 53%)', bg: 'color-mix(in oklab, hsl(221 83% 53%) 10%, transparent)' }
    ];

    const indexStyle = {
        fontSize: '32px',
        fontWeight: '900',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        flexShrink: 0
    };

    return (
        <>
            <div className="about-heading" style={aboutHeadingStyle}>
                <h1>Tagline</h1>
                <span></span>
            </div>
            <div className="our-values" style={ourValuesStyle}>
                <div className="value-content" style={valueContentStyle}>
                    <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: '', fontWeight: 'bold' }}>Our Values</h2>
                    {valueList.map((value, index)=>(
                        <div key={value.key} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                            <span style={{
                                ...indexStyle,
                                color: indexColors[index % indexColors.length].color,
                                backgroundColor: indexColors[index % indexColors.length].bg
                            }}>
                                {index + 1}
                            </span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'hsl(24 60% 15%)' }}>{value.title}</span>
                                <span>{value.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="value-image"></div>
            </div>
        </>
    );
}

export default About;