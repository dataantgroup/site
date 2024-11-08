import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const content = (name) => `
<h3>Revolutionizing Independence Through Innovation</h3>
<p>For visually impaired individuals, traditional guide dogs have long provided critical support. However, the training process is time-consuming and costly, and guide dogs have a limited working lifespan, often only 6-10 years. Due to these limitations, many individuals in need lack access to this essential service.

Our LLM-Driven Quadruped Robot for Visually Impaired Guidance provides a scalable, reliable alternative. Equipped with advanced AI and robotic technology, it offers 24/7 support, requiring minimal maintenance and no specialized training, unlike live animals.</p>
<br/>

<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_01.jpg" /></p>
<br/>
<br/>
<br/>
<h3>Key Features & Competitive Advantages</h3>
<h4>24/7 Availability</h4>
<p>This robot operates continuously without fatigue, ensuring users receive uninterrupted guidance.</p>
<br/>
<h4>Minimal Maintenance</h4>
<p>No feeding, exercising, or vet visits—just regular battery charging and software updates. This convenience minimizes care demands on users.</p>
<br/>
<h4>Extended Lifetime</h4>
<p>The robot’s software and hardware are upgradable, allowing for an extended lifespan and sustained performance.</p>
<br/>
<h4>Scalability</h4>
<p>Pre-trained AI models mean that multiple robots can be deployed without repetitive training, making it an ideal solution for widespread adoption.</p>
<br/>
<h4>Voice Interaction</h4>
<p>Integrated with a large language model, the robotic dog can engage in natural, meaningful conversations with its owner. This feature is not just about navigation; it allows for real-time communication, where the dog can provide verbal updates on the environment. For example, it might say, "There’s a curb ahead," or "A person is approaching on your left," helping the user stay informed and aware of their surroundings.</p>
<br/>
<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_07.jpg" /></p>
<br/>
<h3>How It Works?</h3>
<p>Utilizing cutting-edge sensors, deep learning algorithms, and a powerful LLM, the robot detects obstacles, scans the environment, and provides real-time navigation. Designed for safety and reliability, it empowers visually impaired users with the freedom to navigate independently.</p>
<br/>
<h3>Who Can Benefit?</h3>
<h4>Visually Impaired Individuals</h4>
<p>The robot offers 24/7 support, real-time navigation, and obstacle detection, allowing users to move freely and safely.</p>
<br/>
<h4>Government Agencies</h4>
<p>Ideal for expanding accessibility programs with scalable technology, supporting smart city goals, and enhancing public infrastructure.</p>
<br/>
<h4>NGOs & Blind Support Organizations</h4>
<p>By collaborating with us, organizations can help address the shortage of guide dogs and provide technology-driven mobility support to visually impaired communities.</p>
<br/>
<h3>Join Us in Shaping the Future of Independence</h3>
<p>The LLM-Driven Quadruped Robot represents a breakthrough in assistive technology, offering visually impaired individuals a reliable and scalable guide. We are eager to work with partners—government bodies, non-profits, and other organizations—to bring this technology to those who need it most.

Want to learn more or explore partnership opportunities? Contact us to join a movement that's redefining independence for the visually impaired.</p>
<br/>
`;

const base = (index) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  description: _mock.description(index),
  category: 'Project',
  favorited: _mock.boolean(index),
  createdAt: _mock.time(index),
  tags: _tags.slice(index + 1, index + 2),
  author: {
    name: _mock.fullName(index),
    role: _mock.role(index),
    avatarUrl: _mock.image.avatar(index),
    // quotes: 'Member since Mar 15, 2021',
    about:
      'Development, Engineering; MSc, Computer Engineering, UTK, USA; MSc, Electrical and Electronic Engineering, HKU; BEng, Electronic Engineering, CityU',
    },
});

// ----------------------------------------------------------------------

export const _marketingPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('marketing'),
  coverUrl: _mock.image.marketing(index),
  heroUrl: `/assets/images/marketing/marketing_post_hero.jpg`,
}));

export const _travelPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('travel'),
  coverUrl: _mock.image.travel(index),
  heroUrl: `/assets/images/travel/travel_post_hero.jpg`,
}));

export const _careerPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('career'),
  coverUrl: _mock.image.career(index),
  heroUrl: `/assets/images/career/career_post_hero.jpg`,
}));

export const _coursePosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('course'),
  coverUrl: _mock.image.course(index),
  heroUrl: `/assets/images/course/course_post_hero.jpg`,
}));
