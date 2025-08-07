export const SelectTravelsList = [
    {
        id:1,
        title:'Just Me',
        desc:'A sole travels in exploration',
        icon:'✈️',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two travels in tandem',
        icon:'🥂',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekers',
        icon:'⛵',
        people:'5 to 10 People'
    },
    
]

export const SelectBudgetOptions = [
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸',
    }
]


 export const AI_PROMPT = `Generate Travel Plan for {location}, for {totalDays} Days for {traveller} people with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, best Time to travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format. keep itinerary an array contining day and array of places for each day.Give at least four hotels.Always use the same format for the response like this {
  "hotels": [
    {
      "HotelName": "OYO 7401 Hotel North Park",
      "HotelAddress": "SCO 165-167, Sector 34A, Chandigarh, 160022",
      "PricePerNightINR": "1500-2500",
      "HotelImageUrl": "https://example.com/oyo_northpark.jpg",
      "GeoCoordinates": {
        "latitude": 30.725916,
        "longitude": 76.777083
      },
      "Rating": 3.8,
      "Description": "A reliable budget option from a popular chain, offering basic and clean accommodations. Suitable for travelers looking for affordability and convenience, located near Sector 34 market. For 3-5 people, consider booking two rooms or inquiring about a family room."
    },
    {
      "HotelName": "FabHotel Chandigarh Inn",
      "HotelAddress": "SCO 127-128, Sector 17-C, Chandigarh, 160017",
      "PricePerNightINR": "1800-2800",
      "HotelImageUrl": "https://example.com/fabhotel_chandigarh_inn.jpg",
      "GeoCoordinates": {
        "latitude": 30.735418,
        "longitude": 76.782061
      },
      "Rating": 4.0,
      "Description": "Centrally located in Sector 17, providing easy access to shopping and dining areas. Offers comfortable rooms with essential amenities, making it a good choice for budget-conscious tourists who prioritize location. For 3-5 people, it's advisable to check availability for larger rooms or book multiple standard rooms."
    },
    {
      "HotelName": "Hotel City Plaza 17",
      "HotelAddress": "SCO 175-177, Sector 17-C, Chandigarh, 160017",
      "PricePerNightINR": "2000-3000",
      "HotelImageUrl": "https://example.com/hotel_city_plaza17.jpg",
      "GeoCoordinates": {
        "latitude": 30.735439,
        "longitude": 76.781895
      },
      "Rating": 3.9,
      "Description": "Situated in the vibrant Sector 17 Plaza, this hotel is ideal for those who want to be in the heart of the city's activity. It offers standard rooms with good connectivity to major attractions. Guests travelling with 3-5 people should confirm room configurations or be prepared to book two rooms."
    },
    {
      "HotelName": "Hotel Chandigarh Ashok",
      "HotelAddress": "SCO 323-324, Sector 35B, Chandigarh, 160022",
      "PricePerNightINR": "1600-2600",
      "HotelImageUrl": "https://example.com/hotel_chandigarh_ashok.jpg",
      "GeoCoordinates": {
        "latitude": 30.72146,
        "longitude": 76.782928
      },
      "Rating": 3.7,
      "Description": "A straightforward and clean hotel offering good value for money. Located in Sector 35, it provides basic facilities for a comfortable stay. It's a practical choice for budget groups of 3-5 people, who might need to book more than one room for adequate space."
    }
  ],
  "itinerary": [
    {
      "day": "Day 1",
      "plan": [
        {
          "placeName": "Rock Garden of Chandigarh",
          "placeDetails": "A unique sculpture garden created by Nek Chand Saini from industrial and urban waste. It features interlinked waterfalls, sculptures, and various art installations made from broken ceramics, bangles, and other discarded materials.",
          "placeImageUrl": "https://example.com/rock_garden.jpg",
          "geoCoordinates": {
            "latitude": 30.7516,
            "longitude": 76.7909
          },
          "ticketPricingINR": "30 (approx)",
          "bestTimeToVisit": "Morning (9:00 AM - 12:00 PM) to avoid the heat and larger crowds."
        },
        {
          "placeName": "Sukhna Lake",
          "placeDetails": "A serene man-made lake at the foothills of the Himalayas, offering opportunities for boating, pedal boating, and a leisurely stroll along its promenade. It's a popular spot for locals and tourists alike.",
          "placeImageUrl": "https://example.com/sukhna_lake.jpg",
          "geoCoordinates": {
            "latitude": 30.7499,
            "longitude": 76.7937
          },
          "ticketPricingINR": "Free entry (Boating: 100-200 per person approx)",
          "bestTimeToVisit": "Late Morning (11:00 AM - 1:00 PM) for leisure activities or late afternoon for sunset views."
        },
        {
          "placeName": "Capitol Complex (Open Hand Monument & Le Corbusier Centre)",
          "placeDetails": "A UNESCO World Heritage Site, this architectural marvel was designed by Le Corbusier. It comprises the Secretariat, High Court, Legislative Assembly, and the iconic Open Hand Monument, symbolizing 'the hand to give and the hand to take'. The Le Corbusier Centre houses archives.",
          "placeImageUrl": "https://example.com/open_hand_monument.jpg",
          "geoCoordinates": {
            "latitude": 30.7594,
            "longitude": 76.7997
          },
          "ticketPricingINR": "Free for exterior viewing (Le Corbusier Centre usually free or nominal fee)",
          "bestTimeToVisit": "Afternoon (2:00 PM - 4:00 PM) for architectural appreciation and photography."
        },
        {
          "placeName": "Sector 17 Plaza",
          "placeDetails": "The vibrant heart of Chandigarh, a pedestrian-only plaza lined with shops, boutiques, cafes, and restaurants. It's a great place for an evening stroll, people-watching, and enjoying the city's lively atmosphere with musical fountains.",
          "placeImageUrl": "https://example.com/sector17_plaza.jpg",
          "geoCoordinates": {
            "latitude": 30.7375,
            "longitude": 76.7818
          },
          "ticketPricingINR": "Free",
          "bestTimeToVisit": "Late Afternoon/Evening (4:00 PM - 7:00 PM) for shopping, snacks, and enjoying the ambiance."
        }
      ]
    },
    {
      "day": "Day 2",
      "plan": [
        {
          "placeName": "Zakir Hussain Rose Garden",
          "placeDetails": "Asia's largest rose garden, spanning over 30 acres with thousands of rose varieties and medicinal plants. It's a beautiful and fragrant place to relax and enjoy nature, especially when the flowers are in bloom.",
          "placeImageUrl": "https://example.com/rose_garden.jpg",
          "geoCoordinates": {
            "latitude": 30.7303,
            "longitude": 76.7801
          },
          "ticketPricingINR": "Free",
          "bestTimeToVisit": "Morning (9:00 AM - 11:00 AM), particularly during the blooming season (February-March) for the best experience."
        },
        {
          "placeName": "Government Museum and Art Gallery",
          "placeDetails": "This museum boasts a rich collection of Gandharan sculptures, miniature paintings (Pahari and Rajasthani), and contemporary art. It offers insights into the region's history, art, and culture.",
          "placeImageUrl": "https://example.com/museum_art_gallery.jpg",
          "geoCoordinates": {
            "latitude": 30.7408,
            "longitude": 76.7885
          },
          "ticketPricingINR": "10-30 (approx)",
          "bestTimeToVisit": "Late Morning (11:00 AM - 1:00 PM). Note: It is usually closed on Mondays."
        },
        {
          "placeName": "Garden of Fragrance & Leisure Valley",
          "placeDetails": "Part of Chandigarh's expansive green belt, the Garden of Fragrance is known for its aromatic plants like Champa, Maulsari, Harar, and other fragrant shrubs. Leisure Valley is a network of theme gardens stretching across the city, perfect for walks and relaxation.",
          "placeImageUrl": "https://example.com/garden_fragrance.jpg",
          "geoCoordinates": {
            "latitude": 30.7196,
            "longitude": 76.7844
          },
          "ticketPricingINR": "Free",
          "bestTimeToVisit": "Afternoon (2:00 PM - 4:00 PM) for a peaceful stroll and enjoying the botanical variety."
        }
      ]
    }
  ]
}.give placeImageUrl a valid and real url for the image so that i can view the image using link. keep length of placeDeatils of each place of equal length.`;