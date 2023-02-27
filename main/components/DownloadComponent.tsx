import { useEffect, CSSProperties } from 'react';

export default function DownloadComponent(
  { 
    fileUrl, 
    linkDownload,
    styles,
    children
  }:
    {
      fileUrl: string;
      linkDownload?: string | undefined;
      styles?: CSSProperties | undefined;
      children?: JSX.IntrinsicElements | JSX.Element | string | undefined
    }
): JSX.Element {
  useEffect(() => {
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = linkDownload ? linkDownload : fileUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return <div style={styles ? styles : {}}>{(children ? children : "") as JSX.Element}</div>;
};