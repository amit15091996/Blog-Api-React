import { React, useEffect, useState, useRef } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  Input,
  Label,
} from "reactstrap";
import { loadAllCategories } from "../services/category-service";
import JoditEditor from "jodit-react";
import { createPostService } from "../services/post-service";
import { getCurrentUser } from "../auth";
import { toast } from "react-toastify";

const AddPost = () => {
  const editor = useRef(null);
  //   const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(undefined);

  //   const config = {
  //     placeholder: "Start typing...",
  //   };

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  useEffect(() => {
    setUser(getCurrentUser());
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fieldChanged = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const contentFieldChange = (data) => {
    setPost({ ...post, content: data });
  };

  //post
  const createPost = (event) => {
    event.preventDefault();
    // console.log(post);
    if (post.title.trim() === "") {
      toast.error("post title is requied !!");
      return;
    }

    if (post.content.trim() === "") {
      toast.error("post content is requied !!");
      return;
    }
    if (post.categoryId.trim() === "") {
      toast.error("please select one category !!");
      return;
    }

    //submit form
    post["userId"] = user.id;
    createPostService(post)
      .then((data) => {
        toast.success("YAY!!..Posted");
        setPost({
          title: "",
          content: "",
          categoryId: "",
        });
      })
      .catch((error) => {
        toast.error("something went wrong");
      });
  };

  return (
    <div className="wapper">
      <Card className="shadow-sm border-0 mt-2">
        <CardBody>
          {/* {JSON.stringify(post)} */}
          <h3>What going on your mind ?</h3>
          <Form onSubmit={createPost}>
            <div className="my-3">
              <Label for="title">Post Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Enter here"
                onChange={fieldChanged}
              />
            </div>
            {/* <div className="my-3">
              <Label for="content">Post Content</Label>
              <Input
                type="textarea"
                id="content"
                placeholder="Enter here"
                style={{ height: "250px" }}
              />
            </div> */}

            <JoditEditor
              ref={editor}
              value={post.content}
              //   config={config}
              //   onChange={(newContent) => setContent(newContent)}
              onChange={contentFieldChange}
            />
            <div className="my-3">
              <Label for="category">Post Content</Label>
              <Input
                type="select"
                id="category"
                name="categoryId"
                placeholder="Enter here"
                onChange={fieldChanged}
                defaultValue={0}
              >
                <option disabled value={0}>
                  --select category--
                </option>
                {categories.map((category) => (
                  <option value={category.categoryId} key={category.categoryId}>
                    {category.categoryTitle}
                  </option>
                ))}
              </Input>
            </div>

            <Container className="text-center">
              <Button type="reset" className="rounded" color="danger">
                Reset Content
              </Button>
              <Button type="submit" className="rounded ms-2" color="primary">
                Post Content
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddPost;
