import ArticleSection from "@/components/sections/ArticleSection"
import ConversationSection from "@/components/sections/ConversationSection"
import ReferenceSection from "@/components/sections/ReferenceSection"
import { aboutItem, howItWork, privacyAndSecurity } from "@/data/documents"

const page = () => {
  return (
    <section className='h-screen mt-10'>
      <ArticleSection article={aboutItem}/>
      <ArticleSection article={howItWork}/>
      <ArticleSection article={privacyAndSecurity}/>
      <ConversationSection/>
      <ReferenceSection/>
    </section>
  )
}

export default page