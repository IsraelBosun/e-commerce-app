import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: "0c3nmjdi",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true,
    token: process.env.NEXT_PUBLC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client)


// for jumbotron Image
export const urlFor = (source) => builder.image(source);