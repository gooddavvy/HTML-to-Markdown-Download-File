import React, { useState } from "react";
import { DownloadComponent } from './';

export default function MainComponent(): JSX.Element {
  var [textareaContent, setTextareaContent] = useState("");

  return <div>
    {/*     <DownloadComponent fileUrl='/test.txt' linkDownload='test.txt'>Hello World!</DownloadComponent> */}
    <form>
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