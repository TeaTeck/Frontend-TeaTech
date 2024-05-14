'use client'

import { NotLoggedRedirect, redirectEmployee, redirectResponsible } from '@/api/login'
import { jwtDecode } from "jwt-decode";

export default function Home() {
  const token = localStorage.getItem('session')

  if (token) {
    const decoded = jwtDecode(token);
    const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']

    if (role == 'Responsible') {
      console.log('A ser feito.');
    } else {
      redirectEmployee()
    }
  }

  function logout() {
    localStorage.clear()
    window.location.reload()
  }

  NotLoggedRedirect()
  return <button onClick={logout}>Logout</button>
}
