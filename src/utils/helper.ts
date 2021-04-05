import { auth } from '../services/firebase'

export function signup(email: string, password: string): Promise<unknown> {
  return auth().createUserWithEmailAndPassword(email, password)
}

export function login(email: string, password: string): Promise<unknown> {
  return auth().signInWithEmailAndPassword(email, password)
}

export function signInWithGoogle(): Promise<unknown> {
  const provider = new auth.GoogleAuthProvider()
  return auth().signInWithPopup(provider)
}

export function signInWithGitHub(): Promise<unknown> {
  const provider = new auth.GithubAuthProvider()
  return auth().signInWithPopup(provider)
}

export function logout(): Promise<unknown> {
  return auth().signOut()
}
