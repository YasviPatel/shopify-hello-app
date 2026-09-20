export default function Index() {
  return (
    <s-page heading="Hello App">
      <s-section heading="👋 Hello World!">
        <s-paragraph>
          Welcome to your custom Shopify App! This app is successfully connected
          and running in your demo store.
        </s-paragraph>
      </s-section>

      <s-section slot="aside" heading="App Status">
        <s-paragraph>
          Environment: <strong>Production / Demo Store</strong>
        </s-paragraph>
        <s-paragraph>
          Host: <strong>AWS Lightsail</strong>
        </s-paragraph>
      </s-section>
    </s-page>
  );
}

