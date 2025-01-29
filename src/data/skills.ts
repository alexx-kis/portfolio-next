import { basePath } from '@/constants/const';
import { SkillType } from '@/types/types';

export const SKILLS_CONCISE: SkillType[] = [
  {
    skillsGroupTitle: 'Technologies:',
    skillsItems: [
      {
        skillName: 'HTML',
        skillIcon: `${basePath}/img/icons/html-icon.svg`,
      },
      {
        skillName: 'CSS',
        skillIcon: `${basePath}/img/icons/css-icon.svg`,
      },
      {
        skillName: 'SCSS',
        skillIcon: `${basePath}/img/icons/scss-icon.svg`,
      },
      {
        skillName: 'JavaScript',
        skillIcon: `${basePath}/img/icons/js-icon.svg`,
      },
      {
        skillName: 'TypeScript',
        skillIcon: `${basePath}/img/icons/ts-icon.svg`,
      },
      {
        skillName: 'React',
        skillIcon: `${basePath}/img/icons/react-icon.svg`,
      },
      {
        skillName: 'Next.js',
        skillIcon: `${basePath}/img/icons/next-icon.svg`,
      },

    ],
  },
  {
    skillsGroupTitle: 'Libraries/Tools:',
    skillsItems: [
      {
        skillName: 'Redux Toolkit',
        skillIcon: `${basePath}/img/icons/rtk-icon.svg`,
      },
      {
        skillName: 'Git',
        skillIcon: `${basePath}/img/icons/git-icon.svg`,
      },
      {
        skillName: 'Figma',
        skillIcon: `${basePath}/img/icons/figma-icon.svg`,
      },
      {
        skillName: 'Adobe Photoshop',
        skillIcon: `${basePath}/img/icons/photoshop-icon.svg`,
      },
      {
        skillName: 'Adobe Illustrator',
        skillIcon: `${basePath}/img/icons/illustrator-icon.svg`,
      },
    ],
  },
  {
    skillsGroupTitle: 'Competencies:',
    skillsItems: [
      {
        skillName: 'BEM methodology',
        skillIcon: `${basePath}/img/icons/bem.svg`,
      },
      {
        skillName: 'Responsive Design',
        skillIcon: `${basePath}/img/icons/adaptive-icon.svg`,
      },
      {
        skillName: 'Semantic coding',
        skillIcon: `${basePath}/img/icons/semantic-icon.svg`,
      },
      {
        skillName: 'Testing React Apps',
        skillIcon: `${basePath}/img/icons/testing-icon.svg`,
      },
      {
        skillName: 'React Optimization',
        skillIcon: `${basePath}/img/icons/optimization-icon.svg`,
      },
    ],
  },
  {
    skillsGroupTitle: 'Languages:',
    skillsItems: [
      {
        skillName: 'English (B2)',
        skillIcon: `${basePath}/img/icons/eng.svg`,
      },
      {
        skillName: 'Russian (native)',
        skillIcon: `${basePath}/img/icons/rus.svg`,
      },
      {
        skillName: 'German (A2)',
        skillIcon: `${basePath}/img/icons/ger.svg`,
      },
    ],
  },
];

export const SKILLS_EXPANDED: SkillType[] = [
  {
    skillsGroupTitle: 'Technologies:',
    skillsItems: [
      {
        skillName: 'HTML',
        skillIcon: `${basePath}/img/icons/html-icon.svg`,
        skillDescription: 'I use HTML to structure content on the web, ensuring clean and semantic markup for accessibility and SEO.'
      },
      {
        skillName: 'CSS',
        skillIcon: `${basePath}/img/icons/css-icon.svg`,
        skillDescription: 'CSS is key in styling the structure of my web pages, and I leverage its flexibility to create adaptive designs.'
      },
      {
        skillName: 'SCSS',
        skillIcon: `${basePath}/img/icons/scss-icon.svg`,
        skillDescription: 'I use SCSS for better organization of stylesheets, utilizing variables, mixins, and nesting for maintainable, scalable CSS.'
      },
      {
        skillName: 'JavaScript (ES6+)',
        skillIcon: `${basePath}/img/icons/js-icon.svg`,
        skillDescription: 'I apply modern JavaScript features (like async/await, destructuring, and modules) to create dynamic, interactive web experiences.'
      },
      {
        skillName: 'TypeScript',
        skillIcon: `${basePath}/img/icons/ts-icon.svg`,
        skillDescription: 'I use TypeScript to bring static typing into my JavaScript projects, enhancing tooling, improving code quality, and reducing bugs.'
      },
      {
        skillName: 'React',
        skillIcon: `${basePath}/img/icons/react-icon.svg`,
        skillDescription: 'React is my go-to library for building dynamic user interfaces, helping me break down complex UIs into reusable components.'
      },
      {
        skillName: 'Redux Toolkit',
        skillIcon: `${basePath}/img/icons/rtk-icon.svg`,
        skillDescription: 'I use Redux Toolkit for efficient state management in React applications, leveraging features like slices and async thunks for smooth data flow.'
      },
      {
        skillName: 'Next.js',
        skillIcon: `${basePath}/img/icons/next-icon.svg`,
        skillDescription: 'Next.js powers my server-rendered React applications, enabling fast page loads, static site generation, and server-side rendering for SEO.'
      },
    ],
  },
  {
    skillsGroupTitle: 'UI & Libraries:',
    skillsItems: [
      {
        skillName: 'GSAP',
        skillIcon: `${basePath}/img/icons/gsap-icon.svg`,
        skillDescription: 'I use GSAP for creating smooth, high-performance animations, enhancing user experience with interactive and visually engaging effects.'
      },
      {
        skillName: 'Splide.js',
        skillIcon: `${basePath}/img/icons/splide-icon.svg`,
        skillDescription: 'Splide.js allows me to create responsive, customizable sliders for showcasing content in an engaging way.'
      },
      {
        skillName: 'Swiper',
        skillIcon: `${basePath}/img/icons/swiper-icon.svg`,
        skillDescription: 'I implement Swiper to create touch-friendly sliders with a sleek user experience on both mobile and desktop.'
      },
      {
        skillName: 'Masonry',
        skillIcon: `${basePath}/img/icons/masonry-icon.svg`,
        skillDescription: 'Masonry is used to create grid layouts with dynamic item placement, making content presentation look more organic and responsive.'
      },
      {
        skillName: 'THREE.js',
        skillIcon: `${basePath}/img/icons/threejs-icon.svg`,
        skillDescription: 'THREE.js allows me to add 3D visual elements to web projects, enhancing interactivity and user immersion.'
      },
    ],
  },
  {
    skillsGroupTitle: 'Testing & Debugging:',
    skillsItems: [
      {
        skillName: 'Vitest',
        skillIcon: `${basePath}/img/icons/vitest-icon.svg`,
        skillDescription: 'I use Vitest for fast and efficient unit testing in my projects, ensuring that the application\'s logic behaves as expected.'
      },
      {
        skillName: 'React Testing Library',
        skillIcon: `${basePath}/img/icons/testing-icon.svg`,
        skillDescription: 'With React Testing Library, I write tests that simulate user interactions to verify that components render and behave correctly.'
      },
    ],
  },
  {
    skillsGroupTitle: 'Instruments:',
    skillsItems: [
      {
        skillName: 'Chat GPT',
        skillIcon: `${basePath}/img/icons/chat-gpt-icon.svg`,
        skillDescription: 'I use ChatGPT to quickly generate code, solve development challenges, brainstorm ideas, and enhance productivity in various tasks.'
      },
    ],
  },
  {
    skillsGroupTitle: 'Build Tools & Configurations:',
    skillsItems: [
      {
        skillName: 'Webpack',
        skillIcon: `${basePath}/img/icons/webpack-icon.svg`,
        skillDescription: 'I use Webpack to bundle JavaScript, CSS, and other assets, optimizing my projects for faster loading times and better performance.'
      },
      {
        skillName: 'Vite',
        skillIcon: `${basePath}/img/icons/vite-icon.svg`,
        skillDescription: 'Vite enhances my development workflow with fast hot module replacement and optimized production builds, improving efficiency.'
      },
      {
        skillName: 'ESLint',
        skillIcon: `${basePath}/img/icons/eslint-icon.svg`,
        skillDescription: 'ESLint helps me maintain clean, consistent code by catching errors and enforcing best practices during development.'
      },
    ],
  },
  {
    skillsGroupTitle: 'Version Control & Deployment:',
    skillsItems: [
      {
        skillName: 'Git',
        skillIcon: `${basePath}/img/icons/git-icon.svg`,
        skillDescription: 'I use Git for version control, managing code changes and collaborating with others through branches, commits, and merges.'
      },
      {
        skillName: 'GitHub',
        skillIcon: `${basePath}/img/icons/github-icon.svg`,
        skillDescription: 'GitHub is where I host my repositories, collaborate on projects, and manage version control through pull requests and issues.'
      },
      {
        skillName: 'Vercel',
        skillIcon: `${basePath}/img/icons/vercel-icon.svg`,
        skillDescription: 'Vercel is my deployment platform of choice, enabling fast and easy deployments with automatic previews and serverless functions.'
      },
    ],
  },
  {
    skillsGroupTitle: 'Design & Prototyping:',
    skillsItems: [
      {
        skillName: 'Figma',
        skillIcon: `${basePath}/img/icons/figma-icon.svg`,
        skillDescription: 'I use Figma to design interactive prototypes and collaborate with designers on UI/UX aspects of my projects.'
      },
      {
        skillName: 'Adobe Photoshop',
        skillIcon: `${basePath}/img/icons/photoshop-icon.svg`,
        skillDescription: 'Photoshop is my go-to tool for designing and editing graphics, creating assets for web projects and UI elements.'
      },
      {
        skillName: 'Adobe Illustrator',
        skillIcon: `${basePath}/img/icons/illustrator-icon.svg`,
        skillDescription: 'I use Illustrator to create vector graphics for UI elements, logos, and other design assets in my projects.'
      },
    ],
  },
  {
    skillsGroupTitle: 'Competencies:',
    skillsItems: [
      {
        skillName: 'BEM Methodology',
        skillIcon: `${basePath}/img/icons/bem.svg`,
        skillDescription: 'I follow the BEM methodology to ensure that my CSS is modular, scalable, and maintainable.'
      },
      {
        skillName: 'Responsive Design',
        skillIcon: `${basePath}/img/icons/adaptive-icon.svg`,
        skillDescription: 'I build responsive web pages that adapt seamlessly to different screen sizes, improving accessibility on mobile devices.'
      },
      {
        skillName: 'Semantic Coding',
        skillIcon: `${basePath}/img/icons/semantic-icon.svg`,
        skillDescription: 'I prioritize semantic HTML to improve accessibility, SEO, and maintainability of web projects.'
      },
      {
        skillName: 'Performance Optimization',
        skillIcon: `${basePath}/img/icons/optimization-icon.svg`,
        skillDescription: 'I optimize web applications to ensure fast loading times, improve performance, and provide a smooth user experience.'
      },
    ],
  },
  {
    skillsGroupTitle: 'Languages:',
    skillsItems: [
      {
        skillName: 'English (B2)',
        skillIcon: `${basePath}/img/icons/eng.svg`,
        skillDescription: 'I have an intermediate level of English proficiency, allowing me to communicate effectively in a professional setting.'
      },
      {
        skillName: 'Russian (Native)',
        skillIcon: `${basePath}/img/icons/rus.svg`,
        skillDescription: 'Russian is my native language, which I use for communication and technical tasks.'
      },
      {
        skillName: 'German (A2)',
        skillIcon: `${basePath}/img/icons/ger.svg`,
        skillDescription: 'I have basic German language skills, which I continue to improve for personal and professional development.'
      },
    ],
  },
];
