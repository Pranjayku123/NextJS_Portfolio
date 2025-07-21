import { OrbitingCircles } from "@/components/Magic-UI/orbiting-circle";
import Image from 'next/image';
import htmlIcon from "@/assets/images/html.png";
import cssIcon from "@/assets/images/css-3.png";
import jsIcon from "@/assets/images/js.png";
import tsIcon from "@/assets/images/ts.png";
import jQueryIcon from "@/assets/images/jQuery.png";
import tailwindIcon from "@/assets/images/tailwind.webp";
import reactIcon from "@/assets/images/react.png";
import githubIcon from "@/assets/images/github.png";
import vscodeIcon from "@/assets/images/vscode.webp";
import git from "@/assets/images/social (1).png";
import bootstrap from "@/assets/images/bootstrap.png";
import nextjs from "@/assets/images/nextJS.png";

export default function OrbitingCirclesDemo() {
  return (
    <div>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={40}>
          {Icons.html(40)}
          {Icons.css(40)}
          {Icons.js(40)}
          {Icons.react(40)}
          {Icons.tailwind(40)}
          {Icons.jQuery(40)}
          {Icons.ts(40)}
          {Icons.nextjs(40)}
        </OrbitingCircles>

        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
          {Icons.github(30)}
          {Icons.vscode(30)}
          {Icons.bootstrap(30)}
          {Icons.git(40)}
        </OrbitingCircles>
      </div>
    </div>
  );
}

const Icons = {
  html: (size: number = 40) => (
    <Image src={htmlIcon} alt="HTML" width={size} height={size} title="HTML" />
  ),
  css: (size: number = 40) => (
    <Image src={cssIcon} alt="CSS" width={size} height={size} title="CSS" />
  ),
  js: (size: number = 40) => (
    <Image src={jsIcon} alt="JavaScript" width={size} height={size} title="JavaScript" />
  ),
  ts: (size: number = 40) => (
    <Image src={tsIcon} alt="TypeScript" width={size} height={size} title="TypeScript" />
  ),
  react: (size: number = 40) => (
    <Image src={reactIcon} alt="React" width={size} height={size} title="ReactJS" />
  ),
  tailwind: (size: number = 40) => (
    <Image src={tailwindIcon} alt="Tailwind CSS" width={size} height={size} title="Tailwind CSS" />
  ),
  jQuery: (size: number = 40) => (
    <Image src={jQueryIcon} alt="jQuery" width={size} height={size} title="jQuery" />
  ),
  github: (size: number = 40) => (
    <Image src={githubIcon} alt="GitHub" width={size} height={size} title="GitHub" />
  ),
  vscode: (size: number = 40) => (
    <Image src={vscodeIcon} alt="VS Code" width={size} height={size} title="VS Code" />
  ),
  bootstrap: (size: number = 40) => (
    <Image src={bootstrap} alt="Bootstrap" width={size} height={size} title="Bootstrap" />
  ),
  git: (size: number = 40) => (
    <Image src={git} alt="Git" width={size} height={size} title="Git" />
  ),
  nextjs: (size: number = 40) => (
    <Image src={nextjs} alt="Next.js" width={size} height={size} title="Next.js" />
  ),
};
