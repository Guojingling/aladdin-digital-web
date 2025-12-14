let htmlDocHeader = `<section class="sub-header">
<nav>
    <a href="index.html"><img src="img/logo.png"></a>
    <div class="nav-links" id="navLinks">
        <i class="fa fa-times" onclick="hideMenu()"></i>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="service.html">Our Services</a></li>
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
