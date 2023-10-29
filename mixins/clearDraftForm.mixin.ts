import { removeDraftBookingForm } from '@/lib/utils/storage.util'

export default {
  beforeMount() {
    window.addEventListener('beforeunload', removeDraftBookingForm)
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', removeDraftBookingForm)
  },
}
