export default {
  name: "comment",
  type: "document",
  title: "Comments",
  fields: [
    {
      name: "post",
      type: "reference",
      to: [{ type: "post" }],
      title: "Post"
    },
    {
      name: "author",
      type: "string",
      title: "Author"
    },
    {
      name: "text",
      type: "text",
      title: "Comment"
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      initialValue: new Date().toISOString()
    }
  ], // Add custom list filter to show comments by post
  preview: {
    select: {
      title: "author",
      subtitle: "text",
      post: "post.title" // Display the title of the post in the preview
    },
    prepare({ title, subtitle, post }) {
      return {
        title: `${title} (${post})`,
        subtitle: subtitle
      };
    }
  }
};
