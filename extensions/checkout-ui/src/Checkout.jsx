import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  Button
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const fetchDataFromAPI = async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
  
    return fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("==== Data from the API:", data);

        return data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  return (
    <Banner title="checkout-ui">
      <Button
      onPress={() => {
        fetchDataFromAPI()
      }}
    >
      Pay now
    </Button>
    </Banner>
  );
}