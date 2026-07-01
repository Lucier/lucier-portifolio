'use client'
import { useState, useEffect } from 'react'
import { GitHubProfile, GitHubRepo } from '@/types/github'
import { mockProfile, mockRepos } from '@/lib/github'

export function useGitHub(username: string) {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ])

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error('API limit reached or user not found')
        }

        const profileData = await profileRes.json()
        const reposData = await reposRes.json()
        setProfile(profileData)
        setRepos(reposData)
      } catch {
        // Fall back to mock data if API fails
        setError('Usando dados de demonstração')
        setProfile(mockProfile)
        setRepos(mockRepos)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [username])

  return { profile, repos, loading, error }
}
