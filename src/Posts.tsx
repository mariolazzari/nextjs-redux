import Typography from "@mui/material/Typography";
import { PostsProps } from "../types/posts";

const Posts = ({ posts }: PostsProps) => {
  return (
    <>
      {posts.map(p => (
        <Typography key={p.id} variant="h6">
          {p.title}
        </Typography>
      ))}
    </>
  );
};

export default Posts;
