---
title: Welcome
date: 2019-08-22 08:53:18
cover_index: /assets/rocket.jpg
cover_detail: /assets/city-1.jpg
tags:

---

Thank you for visiting my blog. This site was created to document my odyssey towards learning computer programming. By working on several projects and showcasing those projects here, I hope to solidify my knowledge and demonstrate my aptitude. My first project was building this site. This site was created using a serverless framework. Utilizing [Hexo](https://hexo.io), I was able to design and generate static HTML files that were uploaded to AWS S3 bucket. The domain for this site was registered via AWS route 53. I then utilized AWS CDN to create a CloudFront distribution and connected it to the S3 bucket to enhance the latency performance of this site. Finally to automate the process of deploying new posts I use a CI/CD pipepline via AWS CodeBuild that automatically pushes changes to my S3 bucket.  

## About Me

{% pullquote left %}"You have to assemble your life yourself - action by action. And be satisfied if each one achieves its goal, as far as it can...But there are external obstacles!...if you accept the obstacle and work with what you're given, an alternative will present itself." **Marcus Aurelius, Meditations 8.32{% endpullquote %}
I'm from the sunshine state. I grew up in the projects of Hollywood, Florida. I received my Bachelors in Chemistry from Florida State University and earned my Masters in Biomedical Science from Barry University. Initially, my goal was to become a physician but circumstances didn't permit it so I ended up switching fields. In January 2018, I started learning programming and taught myself Python. I then moved on to learning and working with AWS services. I am a strong believer in stoic principles. Despite setbacks my life purpose is still the same - to help society and improve the lives of others. 

----------------

## **Fill out the contact form below to get in touch with me**
  <form method="POST" action="https://formspree.io/ahmadbilal16@gmail.com">
    <input type="text" name="fullname" placeholder="Name" style="width:25%;">
    <input type="text" name="email" placeholder="Email Address" style="width:25%;">
	Leave a message below
    <textarea rows="5" name="message" placeholder="Your message here..." style="width:100%;"></textarea>
	<input type="hidden" name="_next" value="https://billyboyballin.com/contact/index.html" />
    <button type="submit">Send</button>
  </form>
  
