'use server'
import { getAllPostMeta } from '@/lib/mdx'
import React from 'react'

export async function getServerSideProps() {
    const posts = await getAllPostMeta()
    return { props: { posts } }
}