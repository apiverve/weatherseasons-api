# Weather Seasons API - PHP Package

Weather Seasons calculates astronomical solstice and equinox dates for any target year. It provides exact timestamps and reference timezones for the March and September equinoxes and the June and December solstices.

## Installation

Install via Composer:

```bash
composer require apiverve/weatherseasons
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Weatherseasons\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['year' => 2025]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Weatherseasons\Client;
use APIVerve\Weatherseasons\Exceptions\APIException;
use APIVerve\Weatherseasons\Exceptions\ValidationException;

try {
    $response = $client->execute(['year' => 2025]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "year": 2024,
    "timezone": "UTC",
    "march_equinox": "2024-03-20 03:06:24",
    "june_solstice": "2024-06-20 20:50:58",
    "september_equinox": "2024-09-22 12:43:55",
    "december_solstice": "2024-12-21 09:20:18"
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/weatherseasons?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/weatherseasons?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/weatherseasons?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
