Pod::Spec.new do |s|
  s.name             = 'APIVerveWeatherSeasons'
  s.version          = '1.2.3'
  s.summary          = 'Weather Seasons calculates astronomical solstice and equinox dates for any target year.'
  s.description      = <<-'DESC'
Weather Seasons calculates astronomical solstice and equinox dates for any target year. It provides exact timestamps and reference timezones for the March and September equinoxes and the June and December solstices.

This iOS/macOS SDK provides a convenient way to access the Weather Seasons from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/weatherseasons?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/weatherseasons-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveWeatherSeasons/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
