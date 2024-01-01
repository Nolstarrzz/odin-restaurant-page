export function loadMenuPage() {
    let allContent = document.getElementById('content');

    let navbar = document.createElement('div');
    navbar.className = 'navbar menupage';
    navbar.innerHTML =
    `<ul>
    <li><a href="#" class="home-page">Home</a></li>
    <li><a href="#"class="contact-page">Contact Us</a></li>
    <li><a href="#" class="menu-page">Menu</a></li>
    </ul>`
    allContent.appendChild(navbar);

    let header = document.createElement('div');
    header.className = 'header menupage';
    header.innerHTML = `<p class="title">Menu</p>`;
    allContent.appendChild(header);

    let body = document.createElement('div');
    body.className = 'body menupage';
    body.innerHTML = `<div class="middle">
        <div class="res">
            <p class="res-title">Cool Food</p>
            <p class="res-discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique soluta nobis eaque quam magnam, beatae sed quo esse animi explicabo? Voluptate beatae hic culpa quia quis iste eveniet unde.</p>
        </div>
        <div class="res">
            <p class="res-title">Cool Food</p>
            <p class="res-discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique soluta nobis eaque quam magnam, beatae sed quo esse animi explicabo? Voluptate beatae hic culpa quia quis iste eveniet unde.</p>
        </div>
        <div class="res">
            <p class="res-title">Cool Food</p>
            <p class="res-discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique soluta nobis eaque quam magnam, beatae sed quo esse animi explicabo? Voluptate beatae hic culpa quia quis iste eveniet unde.</p>
        </div>
        <div class="res">
            <p class="res-title">Cool Food</p>
            <p class="res-discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique soluta nobis eaque quam magnam, beatae sed quo esse animi explicabo? Voluptate beatae hic culpa quia quis iste eveniet unde.</p>
        </div>
        <div class="res">
            <p class="res-title">Cool Food</p>
            <p class="res-discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique soluta nobis eaque quam magnam, beatae sed quo esse animi explicabo? Voluptate beatae hic culpa quia quis iste eveniet unde.</p>
        </div>
        <div class="res">
            <p class="res-title">Cool Food</p>
            <p class="res-discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique soluta nobis eaque quam magnam, beatae sed quo esse animi explicabo? Voluptate beatae hic culpa quia quis iste eveniet unde.</p>
        </div>
    </div>`;
    allContent.appendChild(body);
}