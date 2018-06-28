## Web 系统与技术 期末课程设计文档

**Overview and Background:**

​	**Here Guide** is an online platform associated local professional guides with tourists. Unlike the traditional travel agency or independent travel, **Here Guide** offers an opportunity for unique customized experience.

​	With the rapid development of traveling in China, more tourists are looking for unique experience. As for Chinese traveling market, leisure tourism become hotter and hotter and the market proportion of non-hotel deal has exceeded accommodation for the first time. In the third quarter of 2017, the transaction scale of online travel market is 21 billion pounds with the growth of 70%. According to our questionnaire, more than 88.9% participants prefer in-sight vacation.

​	In China, the number of registered guides is 2 million with only 0.9 million actual practitioners by 2016. As the the decrease of travel agency interest caused by OTA(Online Travel Agency)，the bundle of the tour guide and agency has deteriorated the situation of tour guides. Therefore, the government has implemented a policy to cancel the bundle in 2016, which is an opportunity for HERE.

**Product:**

​	The product of the project is a mini program based on Wechat. It is actually a web app. It is just like React or Vue, which are easy to get started. Since it is powered by Tencent and based on wechat. It has several advantages:

1. Convenient

   Mini program has its own IDE and we can do developping, debugging, releasing and everything by the IDE conveniently.

2. Secure

   All the code must be reviewed by the Tencent before the mini program is released.

3. Native

   A good quantity of APIs is provided by wechat.

4. Closed

   No html and js can be imported from outside.

5. Small

   After the code is build, the whole package must be smaller than 1MB.



​	My mini program is provide the user to find the local guide to help him travle more easily.  By using this mini program, the users choose their budget, requirement, destination then they can get the suitable guiders. They can see the general information of every guider. And by tapping the card, users can see guiders resume and connect with them.

**Project Structure:**

* Frontend

  As is described, our product is a mini program. The mini program contains 3 pages:

  1. Search page

     ![](https://ws1.sinaimg.cn/large/006gbcdOgy1fsrdg4lrasj30ho0vckho.jpg)

     As you can see, the user should choose his budget, guider's sexual, age and grand, and of course his destination. After all the choice is ready, by tapping the `Here Search` button, the suitable guiders will be presented in the app. Otherwise it will ask you to finish your choice.

     While choosing your destination, the mini program wiil open the build-in map to help you choose your destination.

     ![image-20180629005250475](/var/folders/tz/495_jc3s0z78r2vh09t1xp8r0000gn/T/abnerworks.Typora/image-20180629005250475.png)

     You can also search your destination.

     ![](https://ws1.sinaimg.cn/large/006gbcdOgy1fsrdpab6thj30hu0vewho.jpg)

     ![](https://ws1.sinaimg.cn/large/006gbcdOgy1fsrdkg28mbj30hm0vkdwu.jpg)

  2. Guiders page

     ![image-20180629005651729](/var/folders/tz/495_jc3s0z78r2vh09t1xp8r0000gn/T/abnerworks.Typora/image-20180629005651729.png)

     Since I do not have real data, I only show several guiders as an instance. But it is quite enough for you to understand how it works.

     Every guider is shown in a card. The card has some general infomation of the guide such as his photo, his name, his score and so on.

     The guiders has some labels and some comments which are the description of them. It is dispalyed looply.

  3. Detail page

     ![](https://ws1.sinaimg.cn/large/006gbcdOgy1fsrfuq3baqj30hq0vmgue.jpg)

     You can see guiders' detail infomation in this page. If you are satisfied with this guider. There are two button prepared for you.

     * Tap the Call button, you can call the guider directly.
     * Tap the Find button, a map will be open, and you can find your guider.

* Backend

  The backend of my project is based on Flask, a python web framework. Since the project is not to complex, I choose Flask.

  Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions. However, Flask supports extensions that can add application features as if they were implemented in Flask itself. Extensions exist for object-relational mappers, form validation, upload handling, various open authentication technologies and several common framework related tools. Extensions are updated far more regularly than the core Flask program.

  Every guider's infomation is stored in the MYSQL database, once any client ask for data, the backend select suitable 

**How to run this project:**

Down load [Wechat_developtools](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) and open this project.