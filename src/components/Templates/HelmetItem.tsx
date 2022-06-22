import { Helmet } from "react-helmet-async";

const HelmetItem = () => {
  return (
    <Helmet>
      <title>{"デフォルトタイトル"}</title>
      <meta name="description" content={"デフォルトの説明文です"} />
      <link rel="canonical" href={`https:hoge.com/${""}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default HelmetItem;
