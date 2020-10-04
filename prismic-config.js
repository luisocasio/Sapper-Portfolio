import Prismic from "prismic-javascript";

export const apiEndpoint: {};

export const Client = Prismic.client(apiEndpoint);

export const linkResolver = (doc) => {
  if (doc.type === "blog_post") return `/blog/${doc.uid}`;
  if (doc.type === "blog_home") return "/blog";
  if (doc.type === "about") return "/about";
  return "/";
};
