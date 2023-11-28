import Navbar from '@/components/navbar/Navbar'
import { getPostBySlug } from '@/lib/mdx'
import React from 'react'
const getPageContent = async slug => {
    const { meta, content } = await getPostBySlug(slug)
    return { meta, content }
}
export async function generateMetadata({ params }) {
    const { meta } = await getPageContent(params.slug)
    return { title: meta.title }
}
const editorDetailed = async ({params}) => {
    const { content } = await getPageContent(params.slug)
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-7xl w-full space-y-2">
                {content}
            </div>
        </div>
    )
}

export default editorDetailed