
let htmlDocForFooter = `<section class="testmonial-footer-banner testmonial-banner">
    <div class="testmonial"><div class="row"><div class="testmonial-col"><img src="./img/services.png"> 
            <div>
                <h3>What We Deliver</h3>
                <ul style="list-style-type: disc">
                    <li>DevOps Engineering</li>
                    <li>Full-stack Development</li>
                    <li>Azure Infrastructure Design</li>
                    <li>Quality Assurance Management</li>
                </ul>
            </div>
        </div>
        <div class="testmonial-col">
            <img src="./img/blankuser.png">
            <div>
                <h3>Get in Touch</h3>
                <ul style="list-style-type: disc">
                    <li>40 Printers Way, Kingston 2604 ACT</li>
                    <li>+(61) 419 483 619</li>
                    <li><a class="footer-email" href="mailto:admin@aladdindigital.com.au">admin@aladdindigital.com.au</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- Footer -->
<section class="footer">
    <p>© Aladdin Digital 2022 All rights reserved - <a href="privacypolicy.html">Privacy Policy</a></p>
</section>
</section>`;
document.writeln(htmlDocForFooter);

(function(){
    var banner = document.querySelector(".testmonial-footer-banner");
    if (!banner) {
        return;
    }
    var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if (entry.isIntersecting) {
                banner.classList.add("is-highlighted");
            } else {
                banner.classList.remove("is-highlighted");
            }
        });
    }, { threshold: 0.35 });
    observer.observe(banner);
})();
