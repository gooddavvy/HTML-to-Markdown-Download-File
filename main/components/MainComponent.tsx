import React, { useState } from "react";
import { DownloadComponent } from './';
import { HtmlToMarkdown as htmlToMarkdown } from "../variables";

export default function MainComponent(): JSX.Element {
  var [textareaContent, setTextareaContent] = useState("");
  var [invisibleComponent, setInvisibleComponent] = useState(<div />);

  var createFile = async function(): Promise<void> {
    try {
      var response = await fetch(`/api/createFile?fileName=file.md&fileContent=${textareaContent}`);
      var data = await response.text();
      console.log(data);
    }
    catch (err) {
      console.error(err);
      // throw err
    };
  };

  var onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    createFile();
    setInvisibleComponent(<p>Please wait for a few seconds while we get ready to download your file...</p>)
    setTimeout(() => { }, 5000)
    setInvisibleComponent(<DownloadComponent fileUrl='/file.md' linkDownload='file.md'>Hello World!</DownloadComponent>);
  };

  return <div>
    {/*     <DownloadComponent fileUrl='/test.txt' linkDownload='test.txt'>Hello World!</DownloadComponent> */}
    <form onSubmit={onSubmit}>
      <textarea
        value={textareaContent}
        rows={50}

        placeholder={`Your HTML goes here...`}
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
{/*     line 35 below */}
      
  {/*         width={100} */}
{/*         columns={1000} */}
{/*         <br /> */}
      <button type="submit">Submit</button>
    </form>
    <div style={{ /*visibility: "hidden"*/ }}>{invisibleComponent}</div>
  </div>;
}

export async function getServerSideProps() {
  return { props: {} };
}