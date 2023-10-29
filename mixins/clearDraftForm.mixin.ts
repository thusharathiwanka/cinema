import { removeDraftBookingForm } from '@/lib/utils/storage.util'

export default {
  beforeMount() {
    window.addEventListener('closed', removeDraftBookingForm)
  },
  beforeDestroy() {
    window.removeEventListener('closed', removeDraftBookingForm)
  },
}
