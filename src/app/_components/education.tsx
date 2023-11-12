import { LocationDark } from "@/components/location";
import { SectionTitle } from "@/components/section.title";
import TextAnimation from "@/components/type-writter";
export const Education = () => {
    const education = [
        {
            title: "Bachelor's in Computer Science",
            location: "Berea College",
            date: "Present",
        }
    ]

    return (
        <div className="flex flex-col font-bold mb-10">
           <SectionTitle>Education</SectionTitle>
            {
                education?.map((each) =>
                    <>
                        <h3 className="text-2xl text-tertiary">{each.title}</h3>
                        <p className="text-xl font-normal text-tertiary">{each.location}</p>
                        <time className="mb-1 text-lg leading-none text-gray-400 dark:text-gray-500">{each.date}</time>

                    </>
                )
            }
        </div>
    );
}
