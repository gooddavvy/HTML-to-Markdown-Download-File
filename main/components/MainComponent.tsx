import React, { useState } from "react";
import { DownloadComponent } from './';

export default function MainComponent(): JSX.Element {
  var [textareaContent, setTextareaContent] = useState("");
  var [invisibleComponent, setInvisibleComponent] = useState("");

  var onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    (e.target as any).value = "hello world!"
  };
  
  return <div>
    {/*     <DownloadComponent fileUrl='/test.txt' linkDownload='test.txt'>Hello World!</DownloadComponent> */}
    <form onSubmit={onSubmit}>
      <textarea
        value={textareaContent}
        style={{
          fontFamily: "monospace"
        }}
        onChange={
          e => setTextareaContent(e.target.value as React.SetStateAction<
            typeof e.target.value
            | typeof textareaContent
          >
          )
        }></textarea>
    </form>
  </div>;
}