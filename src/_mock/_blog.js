import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const content = (name) => `
<p>In recent years, technological advancements have opened new avenues for enhancing the lives of individuals with disabilities. One of the most promising innovations is the development of robotic dogs integrated with advanced artificial intelligence, specifically designed to assist blind and visually impaired individuals. This groundbreaking project aims to combine the loyalty of a traditional guide dog with the intelligence and adaptability of modern robotics.</p>
<br/>

<br/>
<br/>
<br/>
<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_01.jpg" /></p>
<br/>
<br/>
<br/>

<h4>Understanding the Need</h4>
<br/>

<p>For many visually impaired individuals, navigating the world can present significant challenges. Traditional guide dogs have long been a trusted companion, providing support and guidance in various environments. However, not everyone can access or care for a living guide dog. This is where the robotic dog steps in, offering a solution that is both reliable and adaptable.</p>
<br/>

<h3>Innovative Features</h3>
<br/>
<h4>Advanced Navigation</h4>

<p>The robotic dog is equipped with sophisticated sensors and cameras that allow it to perceive its surroundings in real time. Using computer vision and machine learning algorithms, it can identify obstacles, detect changes in terrain, and recognize important landmarks. This enables the dog to navigate complex environments, such as busy streets or crowded public spaces, ensuring the safety of its user.</p>
<br/>

<h4>Voice Interaction</h4>
<p>Integrated with a large language model, the robotic dog can engage in natural, meaningful conversations with its owner. This feature is not just about navigation; it allows for real-time communication, where the dog can provide verbal updates on the environment. For example, it might say, "There’s a curb ahead," or "A person is approaching on your left," helping the user stay informed and aware of their surroundings.</p>

<br/>
<br/>
<br/>
<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_02.jpg" /></p>
<br/>
<br/>
<br/>

<p>Beyond its practical applications, the robotic dog offers emotional companionship. The presence of a responsive, interactive companion can alleviate feelings of isolation often experienced by visually impaired individuals. With features like playful interactions and comforting responses, the robotic dog can enhance the emotional well-being of its user, fostering a sense of connection and security.</p>
<br/>

<p>One of the primary concerns for users of assistive technology is safety. The robotic dog is designed with built-in fail-safes and emergency protocols. If it detects a potential hazard that it cannot navigate around, it can alert the user and suggest alternative routes. This proactive approach ensures that users can trust their robotic companion in various situations.</p>
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
