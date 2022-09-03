import sanityClient from  "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
export const client = sanityClient({
    projectId:"t0ge13e1",
    dataset:"production",
    useCdn:true,
    // token:"sk4xBhQIgb4JrTSwDi9WYgCm2uimhW5Q4L0rPzHOMypfarLWosb9wl0mDmmOsjCXKX1gnWV6vsYrPGQpNNUVECYRL6MnFpv5WXvLJzhXkBvenzmg9ORflBHMafBOCdPH2gZuVek6rLOpUbCyE5lTgRa6UriudHFGXwMLPYxfRwsuQGsUKVPY"

})

const builder = imageUrlBuilder(client)

