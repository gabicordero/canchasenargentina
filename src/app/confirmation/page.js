import { redirect } from 'next/navigation'
import { createClient } from '../utils/supabase/server'

export default async function ConfirmationPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if(error || !data?.user) {
    redirect('/login')
  }
  return (
    <p>Te enviamos un mail de confirmación a {data.user.email}</p>
  )
}