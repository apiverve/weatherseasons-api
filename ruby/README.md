# Weather Seasons API - Ruby Gem

Weather Seasons calculates astronomical solstice and equinox dates for any target year. It provides exact timestamps and reference timezones for the March and September equinoxes and the June and December solstices.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_weatherseasons'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_weatherseasons
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_weatherseasons'

# Initialize the client
client = APIVerve::Weatherseasons::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ year: 2025 })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ year: 2025 })
  puts response["data"]
rescue APIVerve::Weatherseasons::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Weatherseasons::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Weatherseasons::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/weatherseasons?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/weatherseasons?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/weatherseasons?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
