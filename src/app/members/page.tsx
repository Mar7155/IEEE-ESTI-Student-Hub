// src/app/members/page.tsx
import { bebasNeue, jetBrainsMono } from "@/lib/fonts";
import { members } from "../data/members";
import MemberCard from "@/components/MemberCard";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Members() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <div className="w-full max-w-7xl mx-auto">
                <h1 className={`${bebasNeue.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#0371a4] text-center mb-8 mt-14 lg:mt-0 sm:mb-12 lg:mb-16`}>
                    Miembros
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {members.map((member, idx) => (
                        <BlurFade 
                            delay={0.15 + idx * 0.05} 
                            inView 
                            key={member.name}
                        >
                            <MemberCard member={member} />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </main>
    )
}