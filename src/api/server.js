import { createServer } from "miragejs"

createServer({
  routes() {
    this.get("/fakeApi/posts", () => [
        { title: "title1", index: "1", imageLink: "/", blog: "this is the blog content1" },
        { title: "title2", index: "2", imageLink: "/", blog: "this is the blog content2" },
        { title: "title3", index: "3", imageLink: "/", blog: "this is the blog content3" },
    ])
  },
})