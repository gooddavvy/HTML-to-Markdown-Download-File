import React, { useState } from "react";
import { DownloadComponent } from './';
import { HtmlToMarkdown as htmlToMarkdown } from "../variables";

export default function MainComponent(): JSX.Element {
  var [textareaContent, setTextareaContent] = useState("");
  var [invisibleComponent, setInvisibleComponent] = useState(<div />);

  var createFile = async function(): Promise<void> {
    var response = await fetch(`/api/createFile?fileName=file.md&fileContent=${htmlToMarkdown(textareaContent)}`);
    var data = await response.text();
    console.log(data);
  };

  var onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    createFile();
    setInvisibleComponent(<p>Please wait for a few seconds while we get ready to download your file...</p>)
    setTimeout(5000, () => {})
    setInvisibleComponent(<DownloadComponent fileUrl='/file.md' linkDownload='file.md'>Hello World!</DownloadComponent>);
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
      <button type="submit">Submit</button>
    </form>
    <div style={{ /*visibility: "hidden"*/ }}>{invisibleComponent}</div>
  </div>;
}

export async function getServerSideProps() {
  return { props: {} };
}