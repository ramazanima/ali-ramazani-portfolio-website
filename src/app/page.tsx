import HomeLayout from "@/layouts/home";
import { getCategories } from "@/lib/categories-db";
import { getProjects } from "@/lib/projects-db";
import { CategoryType, ProjectType } from "../../types";
import { Intro } from "./_components/Intro";
import { Education } from "./_components/education";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import ProjectsSection from "./_components/projects-section";
import { Timeline } from "./_components/timeline";
import { Metadata } from "next";
import { OWNER_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: OWNER_NAME,
  description: '2023 Ali Ramazani Portfolio',
}


export default async function Home() {
  const { categories, } = await getCategories();
  const { projects, } = await getProjects({}, 'category');
  const experience = [
    {
      title: "Berea College",
      role: "Teaching Assistant",
      desc: "Support 40+ students in the Algorithms Analysis and Design (440) course through conducting lab sessions, providing\n" +
          "guidance, and facilitating discussions, resulting in a 20.7% grade average increase compared to the previous semester",
      date: "Current"
    },

  ]

  return (
    <HomeLayout>
      <div className="w-full p-5 md:p-12 lg:p-20">
        <div className="h-[calc(100vh-100px)] md:h-[calc(100vh-100px)]">
          <Header />
          <Intro />
        </div>
        <ProjectsSection projects={projects as ProjectType[]} categories={categories as CategoryType[]} />
        <Timeline>
          {experience?.map((each) =>
            <Timeline.Item key={each.title} {...each} />
          )}
        </Timeline>
        <Education />
        <Footer />
      </div>
    </HomeLayout>
  );
}
export const fetchCache = 'force-no-store'
export const revalidate = 0;