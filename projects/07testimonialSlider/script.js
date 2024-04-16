const testimonials = [
  {
    username: "Sarah Johnson",
    image_url:
      "https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Partnering with [Software Company] has been an absolute game-changer for our organization. From the initial consultation to the ongoing support, every step of the journey has been exceptional. Their team took the time to truly understand our unique challenges and goals, and they delivered tailored solutions that exceeded our expectations. Not only have their software products streamlined our operations, but they've also empowered our team to innovate and collaborate more effectively. The level of professionalism and expertise demonstrated by [Software Company] is truly remarkable. I wholeheartedly recommend them to any business looking to drive growth and efficiency through technology.",
  },
  {
    username: "Michael Patel",
    image_url:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxRSzFlZ0RNR0dtb3x8ZW58MHx8fHx8",
    text: "I can't speak highly enough of the team at [Software Company]. Their commitment to customer satisfaction is evident in every interaction. From the initial onboarding process to the ongoing support, they've consistently gone above and beyond to ensure our success. Their software solutions have revolutionized the way we do business, providing us with the tools we need to stay ahead in today's competitive landscape. What sets [Software Company] apart is not only the quality of their products but also the depth of their expertise. They don't just sell software; they provide comprehensive solutions tailored to our specific needs. Working with [Software Company] has been a game-changer for our organization, and I highly recommend them to anyone seeking cutting-edge technology solutions.",
  },
  {
    username: "Emily Rodriguez",
    image_url:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxRSzFlZ0RNR0dtb3x8ZW58MHx8fHx8",
    text: "As a small business owner, finding the right technology partner was crucial for our success, and I'm so glad we chose [Software Company]. Their team took the time to understand our business model and objectives, and they delivered a suite of software solutions that perfectly aligns with our needs. Not only are their products intuitive and user-friendly, but their support team is also incredibly responsive and knowledgeable. Whenever we encounter an issue or need assistance, they're there to help us troubleshoot and find solutions quickly. Thanks to [Software Company], we've been able to streamline our operations, improve our customer experience, and drive growth. I highly recommend [Software Company] to any small business looking to leverage technology to achieve their goals.",
  },
  {
    username: "David Thompson",
    image_url:
      "https://images.unsplash.com/photo-1654022090110-ebf9ac7458a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxRSzFlZ0RNR0dtb3x8ZW58MHx8fHx8",
    text: "Working with [Software Company] has been a truly transformative experience for our organization. Their comprehensive suite of software solutions has enabled us to modernize our processes and adapt to the rapidly changing business landscape. What sets [Software Company] apart is not only the quality of their products but also their commitment to continuous improvement and innovation. They're always ahead of the curve, anticipating our needs and delivering solutions that exceed our expectations. The level of expertise and professionalism demonstrated by their team is unparalleled. Whether it's implementing new software or providing ongoing support, [Software Company] has been an invaluable partner on our journey to success. I highly recommend them to any organization looking to stay competitive and future-proof their operations.",
  },
];

const imgEl = document.querySelector(".img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
const prathEl = document.querySelector(".prathamesh");

let idx = 0;

function showTestimonial() {
  const { image_url, text, username } = testimonials[idx];
  imgEl.src = image_url;
  textEl.innerText = text;
  usernameEl.innerText = username;

  setTimeout(() => {
    idx++;
    if (idx === testimonials.length) {
      idx = 0;
    }
    showTestimonial();
  }, 4000);
}

showTestimonial();
