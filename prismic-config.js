import Prismic from "prismic-javascript";

export const apiEndpoint = "https://fullstack-blog.cdn.prismic.io/api/v2";

export const Client = Prismic.client(apiEndpoint);

// Link Resolver
export function linkResolver(doc) {
  // Define the url depending on the document type
  if (doc.type === "blog_home") {
    return "/blog_home/";
  } else if (doc.type === "post") {
    return "/blog/" + doc.uid;
  }

  // Default to homepage
  return "/";
}
