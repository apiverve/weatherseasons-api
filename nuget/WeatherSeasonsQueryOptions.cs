using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.WeatherSeasons
{
    /// <summary>
    /// Query options for the Weather Seasons API
    /// </summary>
    public class WeatherSeasonsQueryOptions
    {
        /// <summary>
        /// The year to get the dates of the solstice and equinox
        /// </summary>
        [JsonProperty("year")]
        public int? Year { get; set; }
    }
}
