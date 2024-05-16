'use client'

import { NotLoggedRedirect } from '@/api/login'
import { jwtDecode } from "jwt-decode";
import { redirect } from 'next/navigation';

export default function Home() {
  const token = localStorage.getItem('session')

  if (token) {
    const decoded = jwtDecode(token);
    const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']

    if (role == 'Responsible') {
      const id = decoded['ChildId']
      redirect(`/assistido/${id}`)
    } else {
      redirect('/listagem/1')
    }
  }

  NotLoggedRedirect()
}
