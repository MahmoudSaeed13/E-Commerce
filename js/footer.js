const createFooter = () => {
  let footer = document.querySelector('footer');
  footer.innerHTML = `
    <div class="footer-content flex-column flex-md-row">
    <a href="index.html"><img src="./imgs/light-logo.png" class="logo" /></a>
        
        <div class="footer-ul-container">
            <ul class="category">
              <li class="category-title">category</li>
              <li><a href="#" class="footer-link">t-shirts</a></li>
              <li><a href="#" class="footer-link">sweatshirt</a></li>
              <li><a href="#" class="footer-link">shirts</a></li>
              <li><a href="#" class="footer-link">jeans</a></li>
              <li><a href="#" class="footer-link">trousers</a></li>
              <li><a href="#" class="footer-link">shoes</a></li>
              <li><a href="#" class="footer-link">casuals</a></li>
              <li><a href="#" class="footer-link">formals</a></li>
              <li><a href="#" class="footer-link">sports</a></li>
              <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam et,
    commodi corrupti ab eos dolores accusantium! Id voluptate ratione ut
    illo similique labore molestias obcaecati dolore velit blanditiis
    facilis ea, ullam tenetur sed dolorem facere nostrum eum quidem fugiat
    harum laboriosam distinctio pariatur? Distinctio qui pariatur voluptas
    blanditiis quae, maiores esse, at nemo eos, molestiae numquam rerum
    quaerat quia eum magni similique consectetur praesentium delectus
    tempore saepe eius voluptatem officia. Totam odit iusto eos odio
    voluptatibus corrupti. Sed commodi doloribus placeat vel provident
    laudantium aut! Veritatis ab qui culpa ullam blanditiis consequatur
    repellendus laudantium labore! Ut, tempora? Amet, pariatur tempora.
    </p>
    <p class="info">
    support emails - help@clothing.com, customersupport@clothing.com
    </p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container flex-column flex-md-row text-center">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
    </div>
    <p class="footer-credit">clothing, best apparels online store</p>
    `;
};
createFooter();

if (
  location.search.slice(1).split('=')[1] > 16 ||
  location.search.slice(1).split('=')[1] < 1
) {
  location.href = '404.html';
}
