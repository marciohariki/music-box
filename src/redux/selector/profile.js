import { createSelector } from 'reselect'

const profileSelector = state => state.user.profile

export const menuProfileSelector = createSelector(
  profileSelector,
  profile => {
    if (!profile) {
      return null
    }
    return {
      name: profile.display_name,
      imgUrl: profile.images.length && profile.images[0].url
    }
  }
)