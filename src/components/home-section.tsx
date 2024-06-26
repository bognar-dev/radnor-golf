import {cn} from "@/lib/utils"

export default function Section({ id, title,className , children }: {id: string, title: string, className?: string, children: React.ReactNode}) {
    return (
      <section id={id} className={cn(className, "bg-[#f5f5f5] dark:bg-[#121212] py-16")}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
          {children}
        </div>
      </section>
    )
  }
  