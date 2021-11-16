export default function authHeader(): { Authorization: string } | { Authorization?: undefined } {
  const storedUser = localStorage.getItem('user')
  const user = JSON.parse(storedUser || '')
  
  if (user && user.accessToken) {
    return { Authorization: `Bearer ${  user.accessToken}` }
  } 
  return {}
    
}