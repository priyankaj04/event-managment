export const headerLinks = [
  {
    label: 'Home',
    route: '/',
    src:'/assets/images/homeicon.webp'
  },
  {
    label: 'Create Event',
    route: '/events/create',
    src:'/assets/images/createicon.webp'
  },
  {
    label: 'My Profile',
    route: '/profile',
    src:'/assets/images/profileicon.webp'
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
