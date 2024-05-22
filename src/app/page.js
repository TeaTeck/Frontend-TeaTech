'use client'

import { getCookie } from '@/api/login'
import { jwtDecode } from "jwt-decode";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const getToken = async () => {
      const t = await getCookie()
      if (t) {
        const d = jwtDecode(t.value)
        if (d['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] == 'Responsible') {
          router.push(`/assistido/${d['ChildId']}`)
        } else {
          router.push('/listagem/1')
        }
      }
    }

    getToken();
  }, []);
}
