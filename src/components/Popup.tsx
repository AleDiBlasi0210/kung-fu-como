import { getPopups } from '@/sanity/content'
import PopupModal from './PopupModal'

export default async function Popup() {
  const popups = await getPopups()
  if (popups.length === 0) return null
  return <PopupModal popups={popups} />
}
