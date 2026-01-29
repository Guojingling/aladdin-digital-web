let htmlDocHeader = `<section class="sub-header">
<nav>
    <a href="index.html"><img src="img/logo.png"></a>
    <div class="nav-links" id="navLinks">
        <i class="fa fa-times" onclick="hideMenu()"></i>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li class="has-submenu">
                <a href="service.html">Our Services</a>
                <ul class="submenu">
                    <li><a href="caseStudyTalentHire.html">Talent Hire</a></li>
                    <li><a href="caseStudyAppDevelopment.html">App Development</a></li>
                    <li><a href="caseStudySupportOps.html">IT Support</a></li>
                    <li><a href="gen-ai.html">Gen AI</a></li>
                </ul>
            </li>
            <li><a href="commitment.html">Our Commitment</a></li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="contactus.html">Contact Us</a></li>
        </ul>
    </div>
    <i class="fa fa-bars" onclick="showMenu()"></i>
</nav>
    <!--h1>Our Services</h1-->
</section>
`;
document.writeln(htmlDocHeader);



