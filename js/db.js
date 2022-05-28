// Users
const users = [
  {
    id: 1,
    name: 'Esraa Elkassas',
    email: 'esraa.elkassas@clothing.com',
    password: 12345678,
    number: 01201201212,
  },
  {
    id: 2,
    name: 'Mahmoud Shehab',
    email: 'mahmoud.shehab@clothing.com',
    password: 12345678,
    number: 01201201212,
  },
  {
    id: 3,
    name: 'Mahmoud Muhammad',
    email: 'mahmoud.muhammad@clothing.com',
    password: 12345678,
    number: 01201201212,
  },
  {
    id: 4,
    name: 'Mohamed Shoukr',
    email: 'mohamed.shoukr@clothing.com',
    password: 12345678,
    number: 01201201212,
  },
  {
    id: 5,
    name: 'Mohamed Elwahsh',
    email: 'mohamed.elwahsh@clothing.com',
    password: 12345678,
    number: 01201201212,
  },
];

// Products
const product = [
  {
    id: 1,
    title: 'White Pink Blouse',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 160,
    discount: 20,
    imgs: ['blouse1.1.png', 'blouse1.2.png', 'blouse1.3.png', 'blouse1.4.png'],
    type: 'Shirts',
  },
  {
    id: 2,
    title: 'White Black Blouse',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 180,
    discount: 15,
    imgs: ['blouse2.1.png', 'blouse2.2.png', 'blouse2.3.png', 'blouse2.4.png'],
    type: 'Shirts',
  },
  {
    id: 3,
    title: 'Pink Blouse',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 240,
    discount: 25,
    imgs: ['blouse3.1.png', 'blouse3.2.png', 'blouse3.3.png', 'blouse3.4.png'],
    type: 'Shirts',
  },
  {
    id: 4,
    title: 'White Blouse',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 180,
    discount: 40,
    imgs: ['blouse4.1.png', 'blouse4.2.png', 'blouse4.3.png', 'blouse4.4.png'],
    type: 'Shirts',
  },
  {
    id: 5,
    title: 'Pink Shirt',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 120,
    discount: 10,
    imgs: ['shirt1.1.jpg', 'shirt1.2.jpg', 'shirt1.3.jpg', 'shirt1.4.jpg'],
    type: 'Shirts',
  },
  {
    id: 6,
    title: 'Brown Shirt',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 110,
    discount: 20,
    imgs: ['shirt2.1.jpg', 'shirt2.2.jpg', 'shirt2.3.jpg', 'shirt2.4.jpg'],
    type: 'Shirts',
  },
  {
    id: 7,
    title: 'White Shirt',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 135,
    discount: 25,
    imgs: ['shirt3.1.jpg', 'shirt3.2.jpg', 'shirt3.3.jpg', 'shirt3.4.jpg'],
    type: 'Shirts',
  },
  {
    id: 8,
    title: 'Black Shirt',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 100,
    discount: 10,
    imgs: ['shirt4.1.jpg', 'shirt4.2.jpg', 'shirt4.3.jpg', 'shirt4.4.jpg'],
    type: 'Shirts',
  },
  {
    id: 9,
    title: 'Men Shoes #1',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 100,
    discount: 15,
    imgs: [
      'menshose1.1.jpg',
      'menshose1.2.jpg',
      'menshose1.3.jpg',
      'menshose1.4.jpg',
    ],
    type: 'Shoes',
  },
  {
    id: 10,
    title: 'Men Shoes #2',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 150,
    discount: 25,
    imgs: [
      'menshose2.1.jpg',
      'menshose2.2.jpg',
      'menshose2.3.jpg',
      'menshose2.4.jpg',
    ],
    type: 'Shoes',
  },
  {
    id: 11,
    title: 'Men Shoes #3',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 140,
    discount: 20,
    imgs: [
      'menshose3.1.jpg',
      'menshose3.2.jpg',
      'menshose3.3.jpg',
      'menshose3.4.jpg',
    ],
    type: 'Shoes',
  },
  {
    id: 12,
    title: 'Men Shoes #4',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 115,
    discount: 20,
    imgs: [
      'menshose4.1.jpg',
      'menshose4.2.jpg',
      'menshose4.3.jpg',
      'menshose4.4.jpg',
    ],
    type: 'Shoes',
  },
  {
    id: 13,
    title: 'Women Shoes #1',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 140,
    discount: 30,
    imgs: ['shose1.1.png', 'shose1.2.png', 'shose1.3.png', 'shose1.4.png'],
    type: 'Shoes',
  },
  {
    id: 14,
    title: 'Women Shoes #2',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 210,
    discount: 20,
    imgs: ['shose2.1.png', 'shose2.2.png', 'shose2.3.png', 'shose2.4.png'],
    type: 'Shoes',
  },
  {
    id: 15,
    title: 'Women Shoes #3',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 180,
    discount: 15,
    imgs: ['shose3.1.png', 'shose3.2.png', 'shose3.3.png', 'shose3.4.png'],
    type: 'Shoes',
  },
  {
    id: 16,
    title: 'Women Shoes #4',
    shortDes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, molestiae?',
    longDes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempore culpa rerum laboriosam veniam officiis ipsum ducimus ad eius fugit minus accusamus sunt delectus magnam, vero maiores aperiam excepturi ab ratione saepe enim natus ipsa? Corporis, commodi quasi, alias ut quisquam explicabo nobis doloribus, itaque cupiditate culpa aspernatur dolore deserunt totam quos illum voluptatibus sed? Ipsa odit recusandae sed commodi molestias neque voluptatum esse cupiditate vitae voluptates. Provident optio doloremque ab voluptatum labore, doloribus delectus sint odio laudantium porro quisquam quia laboriosam unde, sit excepturi? At error quam tempora non reiciendis suscipit rerum voluptate eligendi quas quisquam, quod aspernatur impedit.',
    price: 120,
    discount: 10,
    imgs: ['shose4.1.png', 'shose4.2.jpeg', 'shose4.3.jpeg', 'shose4.4.jpeg'],
    type: 'Shoes',
  },
];

// Local Storage
// localStorage.setItem('users', JSON.stringify(users));
// localStorage.setItem('products', JSON.stringify(product));
