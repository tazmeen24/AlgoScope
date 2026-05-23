import React from 'react'
import AlgoCard from './AlgoCard'
import { Hero } from './hero/Hero'
import SortingImg from '../assets/new-home-images/array.png'
import SearchingImg from '../assets/new-home-images/traversal.png'
import LinearSearchImg from '../assets/new-home-images/search.png'
import GraphAlgoImg from '../assets/new-home-images/shortestPath.png'
import KadaneImg from '../assets/new-home-images/KadaneImg.png'
import MooreVotingImg from '../assets/new-home-images/MooreVoting.png'
import BacktrackingImg from '../assets/new-home-images/KadaneImg.png'
import adt from '../assets/new-home-images/adt.png'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const ALGORITHMS = [
  {
    title: 'Sorting',
    description: 'Visualizing Bubble, Merge, Quick, Heap, and Shell Sort.',
    color: 'theme-card border-blue-500/30 hover:border-blue-400',
    link: '/sort',
    image: SortingImg,
    imageAlt: 'Array elements being rearranged for sorting algorithms',
  },
  {
    title: 'Searching',
    description: 'Explore BFS, DFS, and other traversal methods.',
    color: 'theme-card border-cyan-500/30 hover:border-cyan-400',
    link: '/search',
    image: SearchingImg,
    imageAlt: 'Graph traversal nodes and paths for searching algorithms',
  },
  {
    title: 'Graph Algorithms',
    description: 'Dijkstra, Floyd-Warshall, and Topological Sort.',
    color: 'theme-card border-purple-500/30 hover:border-purple-400',
    link: '/spath',
    image: GraphAlgoImg,
    imageAlt: 'Weighted graph path visualization for shortest path algorithms',
  },
  {
    title: 'Array Search',
    description: 'Linear and Binary search visualization.',
    color: 'theme-card border-orange-500/30 hover:border-orange-400',
    link: '/ldssearch',
    image: LinearSearchImg,
    imageAlt: 'Array search visualization highlighting a target value',
  },
  {
    title: 'Abstract Data Types',
    description:
      'Stacks, Queues, Binary Trees, Binary Heaps, and Priority Queues.',
    color: 'theme-card border-emerald-500/30 hover:border-emerald-400',
    link: '/adt',
    image: adt,
    imageAlt:
      'Stacks, Queues, Binary Trees, Binary Heaps, and Priority Queues data structures',
  },
  {
    title: 'Kadane Algorithm',
    description: 'Visualize Maximum Subarray Sum using Kadane’s Algorithm.',
    color: 'theme-card border-pink-500/30 hover:border-pink-400',
    link: '/kadane',
    image: KadaneImg,
    imageAlt: 'Kadane algorithm visualization for maximum subarray sum',
  },
  {
    title: "Moore's Voting Algorithm",
    description:
      "Visualize the Moore's Voting Algorithm for finding the majority element.",
    color: 'theme-card border-green-500/30 hover:border-green-400',
    link: '/moore-voting',
    image: MooreVotingImg,
    imageAlt:
      "Moore's Voting algorithm visualization for finding the majority element",
  },
  {
    title: 'Math Theory',
    description:
      'Visualize GCD, Fast Exponentiation, and Bit Manipulation step-by-step.',
    color: 'theme-card border-indigo-500/30 hover:border-indigo-400',
    link: '/math-theory',
    image: KadaneImg,
    imageAlt: 'Mathematical algorithms visualization',
  },
  {
    title: 'Backtracking',
    description:
      'N-Queens and Sudoku Solver — watch the algorithm place, conflict, and undo in real time.',
    color: 'bg-slate-900/50 border-rose-500/30 hover:border-rose-400',
    link: '/backtracking',
    image: BacktrackingImg,
    imageAlt:
      'N-Queens chessboard with queens placed and backtracking steps highlighted',
  },
]

export const Home = () => {
  return (
    <div className="theme-home relative min-h-screen w-full overflow-hidden selection:bg-cyan-500/30">
      <Hero />

      <div className="relative z-10 px-4 pb-16">
        <div id="explore" className="mx-auto w-full max-w-7xl px-4">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <span className="font-mono text-sm uppercase tracking-[0.3em] text-neutral-400">
              Algorithms
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          </div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {ALGORITHMS.map((algo, index) => (
              <AlgoCard
                key={index}
                title={algo.title}
                description={algo.description}
                color={algo.color}
                link={algo.link}
                image={algo.image}
                imageAlt={algo.imageAlt}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
