export const simple = `() => {
  const items = [
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: (
        <TextButton weight="normal" size="small">
          suffix button
        </TextButton>
      ),
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: 'Jan 1, 2019 12:03 AM',
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
      customPrefix: (
        <svg
          xmlns="http:www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12.5,20 C8.35786438,20 5,16.6421356 5,12.5 C5,8.35786438 8.35786438,5 12.5,5 C16.6421356,5 20,8.35786438 20,12.5 C20,16.6421356 16.6421356,20 12.5,20 Z M12.5,19 C16.0898509,19 19,16.0898509 19,12.5 C19,8.91014913 16.0898509,6 12.5,6 C8.91014913,6 6,8.91014913 6,12.5 C6,16.0898509 8.91014913,19 12.5,19 Z M13,12.2928932 L15.3535534,14.6464466 L14.6464466,15.3535534 L12,12.7071068 L12,9 L13,9 L13,12.2928932 Z" />
        </svg>
      ),
    },
    {
      id: 1,
      label: 'Quote #8 Accepted: Website setup, $7.00',
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: 'Jan 1, 2019 12:03 AM',
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
  ];

  return <Timeline items={items} />;
}`;
