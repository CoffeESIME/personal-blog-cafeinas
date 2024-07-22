
import { Download, Scroll } from 'lucide-react'
import JobsList from '@/components/Cards/JobList'

export default function Resume({ }) {
  return (
    <div className= 'relative col-span-6 gap-2 sm:col-span-3 md:col-span-3 lg:col-span-3 h-80"'>
      <JobsList />

      <div className="flex flex-row justify-between w-full gap-2">
        <button
        //   href="https://read.cv/educlopez"
          className="w-1/2"
          rel="noopener noreferrer"
        >
          <Scroll className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
          Read.cv
        </button>
        <button
         
        >
          <Download className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
          Descargar cv
        </button>
      </div>
    </div>
  )
}
