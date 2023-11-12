import { LocationDark } from "@/components/location";
import TextAnimation from "@/components/type-writter";
export const Intro = () => {

    const wordsToAnimate = ["Web Development", "Software Engineering", "Full Stack Development", "Agile Methodology"];
    return (
        <div className="flex flex-col justify-end md:justify-around h-full">
            <div className="hidden h-0 md:h-auto md:flex md:justify-end">
                <LocationDark />
            </div>
            <div className="flex flex-col item-start">
                <div className='text-4xl text-white font-bold max-w-md'>
                    Crafting digital experiences through
                    <span className="text-secondary">

                        <TextAnimation words={wordsToAnimate} interval={2000} />
                    </span>
                </div>
                <div className="text-tertiary opacity-70 mt-7 flex flex-col gap-3">

                    <p className="font-bold">
                        If you&apos;re seeking a software developer with a passion for creating robust web applications and embracing ,
                        let&apos;s collaborate on bringing your ideas to life.
                    </p>
                    <div className="flex items-center gap-3 italic text-white text-sm">
                        <div className="bg-secondary h-3 w-3 rounded-full" />
                        <p className="text-white text-2xl">
                            Available for Open Source Collaboration / Brainstorming / Speaking
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}
