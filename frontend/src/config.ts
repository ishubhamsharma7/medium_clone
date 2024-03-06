export const BACKEND_URL = 'https://backend.shubhamsharma649.workers.dev'

export const EDITOR_CONFIG = {
   schema: 'html5',
   promotion: false,
   menubar: 'edit insert view format table tools',
   plugins: ['preview', 'searchreplace', 'autolink', 'directionality', 'image', 'link', 'visualblocks', 'codesample', 'table', 'charmap', 'nonbreaking', 'anchor', 'advlist', 'lists', 'wordcount', 'media'],
   toolbar1: 'fontfamily | fontsize | lineheight | bold italic strikethrough forecolor backcolor | link | image | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | media',
   line_height_formats: '1.2 1.3 1.4 1.5 1.6 1.7 1.8 1.9 2.0',
   image_advtab: true,
   image_description: false,
   height:525,
   branding: false,
   relative_urls: false,
   remove_script_host: false,
   resize: false,
   content_style: `.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
   font-style: italic;
   color: #cccccc;
   font-size: 14px;
   }
   body { color: #555555;} `,
}