import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import type { PostType } from '../../types/postType';

type TaskItemProps={
  post: PostType,
  deleteHandler:(e: React.MouseEvent<HTMLElement>, id: number) => void,
  patchHandler:(e:React.FormEvent<HTMLFormElement>, id:number) => void
}
export default function TaskItem({post, deleteHandler, patchHandler}:TaskItemProps):JSX.Element {

  const [click, setClick] = React.useState(false);

  const handleClick = ():void =>{
    setClick((prev) => !prev);
  }
  return (
    <Card>
      {!click ?(
        <>
    <Card.Body>{post.text}</Card.Body>
    <Button variant='primary' onClick={() => handleClick()}>Edit</Button>
    <Button variant='danger' onClick={(e)=> deleteHandler(e, post.id)}>Delete</Button>
    </>
    ) : (
      <Form onSubmit={(e) => patchHandler(e, post.id)}>
       <Form.Control name='text'  type="text" defaultValue={post.text}/>
       <Button variant='primary' type='submit' onClick={()=> setTimeout(() =>handleClick(),100)}>Save</Button>
      </Form>
      
    )
  }

  </Card>
  )
}
