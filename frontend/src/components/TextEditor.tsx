
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { EDITOR_CONFIG } from '../config';
import { useRef } from 'react';

interface TextEditorProps{
   content:string;
   setContent: (content:any)=>void
   onChange?:(value:any)=>void
}

export default function TextEditor({content,setContent}:TextEditorProps) {

  // const editorRef = useRef<TinyMCEEditor | null>(null);
   //   const [content, setContent] = useState(``);
   //   const [text, setText] = useState();

   //   const log = () => {
   //     if (editorRef.current) {
   //       console.log(editorRef.current.getContent());
   //     }
   //   };
  const onEditorChange = function (editorValue:any) {
    setContent(editorValue);
   //  setText(editor.getContent({ format: `text` }));
   //  onChange(content)
  };
  
  return (
    <div>
      
      <Editor
        onEditorChange={onEditorChange}
        apiKey={import.meta.env.VITE_EDITOR_API_KEY}
        value={content}
        // onInit={(_evt, editor) => (editorRef.current = editor)}
        init={EDITOR_CONFIG as Object}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </div>
  );

}
