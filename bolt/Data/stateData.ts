// This file contains mock data for the travel guide
// In a real application, this would be fetched from an API

export const getStateData = (state: string) => {
    // For demonstration purposes, we're returning sample data for a few states
    // In a real app, this would be fetched from an API or database
    const stateDataMap: Record<string, any> = {
      "Rajasthan": {
        description: "Known as the 'Land of Kings', Rajasthan is India's largest state by area. Famous for its majestic palaces, ancient forts, vibrant culture, and expansive Thar Desert, it offers a kaleidoscope of experiences that showcase India's royal heritage.",
        weather: {
          condition: "Sunny",
          temperature: 32,
          humidity: 45,
        },
        attractions: [
          {
            name: "Amber Fort",
            description: "A majestic fort complex built from red sandstone and marble, featuring stunning architecture and panoramic views of Maota Lake.",
            image: "https://images.pexels.com/photos/13430577/pexels-photo-13430577.jpeg",
            location: "Jaipur"
          },
          {
            name: "City Palace",
            description: "A stunning fusion of Rajasthani and Mughal architecture, this palace complex houses museums with royal artifacts and impressive courtyards.",
            image: "https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg",
            location: "Udaipur"
          },
          {
            name: "Mehrangarh Fort",
            description: "One of India's largest forts, perched 400 feet above Jodhpur, offering magnificent views of the blue city below.",
            image: "https://images.pexels.com/photos/3581903/pexels-photo-3581903.jpeg",
            location: "Jodhpur"
          },
          {
            name: "Jaisalmer Fort",
            description: "A living fort with narrow winding lanes, ancient havelis, and temples, rising from the golden sands of the Thar Desert.",
            image: "https://images.pexels.com/photos/13963631/pexels-photo-13963631.jpeg",
            location: "Jaisalmer"
          }
        ],
        culture: {
          festivals: [
            {
              name: "Pushkar Camel Fair",
              description: "A vibrant annual event where thousands of camels are traded, decorated, and raced, accompanied by cultural performances."
            },
            {
              name: "Desert Festival",
              description: "A celebration of Rajasthani folk culture with music, dance, camel races, and turban-tying competitions in the dunes of Jaisalmer."
            },
            {
              name: "Teej Festival",
              description: "A festival celebrating the monsoon season and honoring Goddess Parvati, featuring colorful processions and swing ceremonies."
            }
          ],
          arts: [
            {
              name: "Puppetry (Kathputli)",
              description: "Traditional string puppetry telling folk tales and legends of Rajasthan through colorfully dressed wooden puppets."
            },
            {
              name: "Block Printing",
              description: "Ancient technique of hand printing textiles using carved wooden blocks, creating intricate patterns with natural dyes."
            },
            {
              name: "Miniature Painting",
              description: "Detailed, delicate paintings on small surfaces depicting royal scenes, folk tales, and religious themes."
            }
          ]
        },
        cuisine: [
          {
            name: "Dal Baati Churma",
            description: "A traditional combination of lentil soup, baked wheat balls, and sweetened crushed wheat with ghee.",
            image: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg"
          },
          {
            name: "Laal Maas",
            description: "A fiery red meat curry made with mathania red chilies, yogurt, and aromatic spices.",
            image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
          },
          {
            name: "Ker Sangri",
            description: "A dry preparation of desert berries and beans, flavored with spices and often served with bajra rotis.",
            image: "https://images.pexels.com/photos/15913452/pexels-photo-15913452.jpeg"
          }
        ],
        bestTimeToVisit: [
          {
            season: "Winter",
            months: "October to March",
            description: "Pleasant temperatures and clear skies make this the ideal time to explore Rajasthan's outdoor attractions and desert landscapes."
          },
          {
            season: "Monsoon",
            months: "July to September",
            description: "The desert state transforms with greenery and numerous cultural festivals. Some areas may experience heavy rainfall."
          },
          {
            season: "Summer",
            months: "April to June",
            description: "Extremely hot with temperatures often exceeding 40°C. Not recommended unless you're visiting hill stations like Mount Abu."
          }
        ],
        eco: {
          tips: [
            "Opt for camel safaris over jeep tours to reduce carbon footprint in desert regions",
            "Stay in heritage hotels that practice water conservation",
            "Support local handicraft communities by purchasing directly from artisans",
            "Use refillable water bottles as Rajasthan is a water-scarce state",
            "Respect wildlife in desert national parks by maintaining distance and not disturbing habitats"
          ],
          spots: [
            {
              name: "Kumbhalgarh Wildlife Sanctuary",
              description: "A protected area home to wolves, leopards, and sloth bears with minimal tourist infrastructure to preserve the natural habitat."
            },
            {
              name: "Tal Chhapar Sanctuary",
              description: "A blackbuck reserve with grassland ecosystem conservation efforts and community-based tourism initiatives."
            }
          ]
        }
      },
      "Kerala": {
        description: "Known as 'God's Own Country', Kerala is famous for its palm-lined beaches, backwaters, temple festivals, and rejuvenating Ayurvedic treatments. With its network of canals, coconut groves, paddy fields, and lush hillside tea plantations, Kerala offers a tranquil escape into nature.",
        weather: {
          condition: "Rainy",
          temperature: 28,
          humidity: 85,
        },
        attractions: [
          {
            name: "Alleppey Backwaters",
            description: "A network of lagoons, lakes, and canals where you can cruise on traditional houseboats and experience the tranquil rural life of Kerala.",
            image: "https://images.pexels.com/photos/1310740/pexels-photo-1310740.jpeg",
            location: "Alleppey (Alappuzha)"
          },
          {
            name: "Munnar Tea Plantations",
            description: "Verdant hills covered with emerald-green tea plantations, offering hiking trails and breathtaking mountain views.",
            image: "https://images.pexels.com/photos/3454533/pexels-photo-3454533.jpeg",
            location: "Munnar"
          },
          {
            name: "Fort Kochi",
            description: "A historic area with colonial architecture, Chinese fishing nets, art galleries, and cultural performances.",
            image: "https://images.pexels.com/photos/18872909/pexels-photo-18872909.jpeg",
            location: "Kochi"
          },
          {
            name: "Periyar Wildlife Sanctuary",
            description: "A protected area where you can spot elephants, tigers, and other wildlife while exploring by boat on Periyar Lake.",
            image: "https://images.pexels.com/photos/16426238/pexels-photo-16426238.jpeg",
            location: "Thekkady"
          }
        ],
        culture: {
          festivals: [
            {
              name: "Onam",
              description: "Kerala's harvest festival featuring elaborate flower carpets (pookkalam), boat races, and traditional Onasadya feasts."
            },
            {
              name: "Thrissur Pooram",
              description: "A spectacular temple festival with caparisoned elephants, traditional percussion ensembles, and a magnificent fireworks display."
            },
            {
              name: "Boat Races (Vallam Kali)",
              description: "Competitive snake boat races held during the harvest season, featuring long canoes with up to 100 rowers."
            }
          ],
          arts: [
            {
              name: "Kathakali",
              description: "Ancient classical dance-drama known for its elaborate costumes, facial expressions, and stories from Hindu epics."
            },
            {
              name: "Mohiniyattam",
              description: "A graceful classical dance form performed by women, characterized by swaying movements and circular patterns."
            },
            {
              name: "Kalaripayattu",
              description: "One of the world's oldest martial art forms, combining combat techniques, physical exercises, and meditative practices."
            }
          ]
        },
        cuisine: [
          {
            name: "Kerala Sadya",
            description: "A traditional vegetarian feast served on banana leaves with rice, curries, pickles, and desserts.",
            image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg"
          },
          {
            name: "Appam with Stew",
            description: "Lacy rice pancakes served with a coconut milk-based vegetable or meat stew.",
            image: "https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg"
          },
          {
            name: "Karimeen Pollichathu",
            description: "Pearl spot fish marinated in spices, wrapped in banana leaves, and grilled to perfection.",
            image: "https://images.pexels.com/photos/5718071/pexels-photo-5718071.jpeg"
          }
        ],
        bestTimeToVisit: [
          {
            season: "Winter",
            months: "October to February",
            description: "Pleasant weather with temperatures between 22-32°C, perfect for exploring beaches, backwaters, and wildlife sanctuaries."
          },
          {
            season: "Monsoon",
            months: "June to September",
            description: "The landscape turns lush green with occasional heavy rains. Ideal for Ayurvedic treatments and watching the revival of nature."
          },
          {
            season: "Summer",
            months: "March to May",
            description: "Warm and humid with temperatures up to 38°C. Good for hill station visits but coastal areas can be uncomfortably hot."
          }
        ],
        eco: {
          tips: [
            "Choose operators who follow responsible backwater tourism practices",
            "Stay in eco-friendly resorts that use renewable energy and practice water conservation",
            "Participate in community-based tourism initiatives that benefit local villages",
            "Avoid plastic usage, especially in beach and backwater areas",
            "Respect wildlife in sanctuaries by maintaining silence and following guide instructions"
          ],
          spots: [
            {
              name: "Thenmala Eco-Tourism",
              description: "India's first planned eco-tourism destination with adventure zones, culture zones, and sustainable practices."
            },
            {
              name: "Wayanad Tree House Stays",
              description: "Eco-friendly accommodations built on trees without harming them, powered by solar energy and rainwater harvesting."
            }
          ]
        }
      },
      "Goa": {
        description: "India's smallest state packs in a wealth of experiences, from golden beaches and vibrant nightlife to Portuguese colonial architecture and spice plantations. Goa blends Indian and Portuguese cultures to create a unique atmosphere that attracts visitors from around the world.",
        weather: {
          condition: "Sunny",
          temperature: 30,
          humidity: 70,
        },
        attractions: [
          {
            name: "Calangute Beach",
            description: "Known as the 'Queen of Beaches', this popular stretch offers water sports, beachside shacks, and vibrant atmosphere.",
            image: "https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg",
            location: "North Goa"
          },
          {
            name: "Basilica of Bom Jesus",
            description: "A UNESCO World Heritage Site housing the mortal remains of St. Francis Xavier in an ornate silver casket.",
            image: "https://images.pexels.com/photos/18513867/pexels-photo-18513867.jpeg",
            location: "Old Goa"
          },
          {
            name: "Dudhsagar Falls",
            description: "One of India's tallest waterfalls at 310 meters, creating a spectacular four-tiered cascade through dense forest.",
            image: "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg",
            location: "Sanguem"
          },
          {
            name: "Anjuna Flea Market",
            description: "A vibrant weekly market selling handicrafts, clothing, jewelry, and souvenirs with live music and food stalls.",
            image: "https://images.pexels.com/photos/1079001/pexels-photo-1079001.jpeg",
            location: "Anjuna"
          }
        ],
        culture: {
          festivals: [
            {
              name: "Carnival",
              description: "A colorful pre-Lenten celebration with music, dance, floats, and street parties, unique to Goa in India."
            },
            {
              name: "Shigmo",
              description: "A spring festival celebrating the arrival of spring with folk performances, colorful processions, and traditional dances."
            },
            {
              name: "Feast of St. Francis Xavier",
              description: "A religious celebration honoring Goa's patron saint with masses, processions, and cultural events."
            }
          ],
          arts: [
            {
              name: "Goan Folk Music",
              description: "Blend of Indian and Portuguese influences, featuring instruments like the ghumot and traditional songs called mannkurao."
            },
            {
              name: "Kunbi Weaving",
              description: "Traditional textile craft of the Kunbi tribe, creating distinctive checkered patterns in red and black."
            },
            {
              name: "Terracotta Art",
              description: "Clay figurines and pottery depicting rural life, religious symbols, and everyday scenes of Goan society."
            }
          ]
        },
        cuisine: [
          {
            name: "Fish Curry Rice",
            description: "The staple Goan meal featuring fish curry made with coconut, kokum, and spices, served with steamed rice.",
            image: "https://images.pexels.com/photos/16148493/pexels-photo-16148493.jpeg"
          },
          {
            name: "Vindaloo",
            description: "A spicy curry traditionally made with pork, vinegar, and a blend of spices, showcasing Portuguese influences.",
            image: "https://images.pexels.com/photos/14461668/pexels-photo-14461668.jpeg"
          },
          {
            name: "Bebinca",
            description: "A traditional multi-layered pudding made with coconut milk, eggs, and nutmeg, often served during celebrations.",
            image: "https://images.pexels.com/photos/14729979/pexels-photo-14729979.jpeg"
          }
        ],
        bestTimeToVisit: [
          {
            season: "Winter",
            months: "November to February",
            description: "Perfect beach weather with temperatures between 20-30°C, clear skies, and major festivals including Christmas and Carnival."
          },
          {
            season: "Monsoon",
            months: "June to September",
            description: "Lush green landscapes and fewer tourists, though some beach activities are restricted. Ideal for spice plantation visits."
          },
          {
            season: "Shoulder Season",
            months: "March to May, October",
            description: "March-May gets progressively hotter but offers good deals. October has post-monsoon freshness with fewer crowds."
          }
        ],
        eco: {
          tips: [
            "Choose accommodations that practice water conservation and waste management",
            "Participate in beach clean-up initiatives organized by local environmental groups",
            "Visit organic spice farms that maintain traditional farming practices",
            "Use public transport or rent bicycles for local exploration",
            "Avoid disturbing marine life during boat trips and water activities"
          ],
          spots: [
            {
              name: "Cotigao Wildlife Sanctuary",
              description: "One of Goa's oldest wildlife sanctuaries with nature trails through pristine forest and minimal human interference."
            },
            {
              name: "Bhagwan Mahavir Wildlife Sanctuary",
              description: "A protected area with sustainable tourism initiatives, featuring diverse flora, fauna, and the famous Dudhsagar Falls."
            }
          ]
        }
      },
      "Tamil Nadu": {
        description: "A land of cultural and religious heritage, Tamil Nadu boasts magnificent temples, classical arts, distinctive cuisine, and diverse landscapes from beaches to rolling hills. Home to one of the world's oldest classical languages, this southern state offers a glimpse into ancient Dravidian civilization.",
        weather: {
          condition: "Partly Cloudy",
          temperature: 31,
          humidity: 65,
        },
        attractions: [
          {
            name: "Meenakshi Amman Temple",
            description: "A magnificent temple complex with 14 gopurams (gateway towers), thousands of stone sculptures, and elaborate corridors.",
            image: "https://images.pexels.com/photos/8038895/pexels-photo-8038895.jpeg",
            location: "Madurai"
          },
          {
            name: "Shore Temple",
            description: "A UNESCO World Heritage Site featuring ancient stone temples overlooking the Bay of Bengal, built during the Pallava dynasty.",
            image: "https://images.pexels.com/photos/13930407/pexels-photo-13930407.jpeg",
            location: "Mahabalipuram"
          },
          {
            name: "Ooty (Udhagamandalam)",
            description: "A picturesque hill station with colonial architecture, botanical gardens, and the famous Nilgiri Mountain Railway.",
            image: "https://images.pexels.com/photos/15871285/pexels-photo-15871285.jpeg",
            location: "Nilgiri Hills"
          },
          {
            name: "Brihadishvara Temple",
            description: "A UNESCO-listed 'Great Living Chola Temple' known for its massive Nandi statue and intricate Chola-era architecture.",
            image: "https://images.pexels.com/photos/3689877/pexels-photo-3689877.jpeg",
            location: "Thanjavur"
          }
        ],
        culture: {
          festivals: [
            {
              name: "Pongal",
              description: "A four-day harvest festival celebrating the sun, earth, and cattle with special dishes, rituals, and cultural events."
            },
            {
              name: "Natyanjali Dance Festival",
              description: "A celebration of classical dance forms performed as offerings to Lord Nataraja at the Chidambaram temple."
            },
            {
              name: "Mahamaham",
              description: "A grand tank festival held once every 12 years at the Mahamaham tank in Kumbakonam, involving ritual bathing."
            }
          ],
          arts: [
            {
              name: "Bharatanatyam",
              description: "An ancient classical dance form with precise movements, expressive gestures, and intricate footwork."
            },
            {
              name: "Tanjore Painting",
              description: "Classical South Indian painting style characterized by rich colors, gold foil, and embedded precious/semi-precious stones."
            },
            {
              name: "Carnatic Music",
              description: "Classical music tradition with emphasis on vocal performance, accompanied by violin, mridangam, and other instruments."
            }
          ]
        },
        cuisine: [
          {
            name: "Dosa",
            description: "A crispy fermented rice and lentil crepe, often served with sambar and chutneys.",
            image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
          },
          {
            name: "Chettinad Chicken",
            description: "A fiery curry from the Chettinad region, prepared with aromatic spices and freshly ground masalas.",
            image: "https://images.pexels.com/photos/7625081/pexels-photo-7625081.jpeg"
          },
          {
            name: "Filter Coffee",
            description: "Traditional South Indian coffee prepared with a metal filter and served in a stainless steel tumbler and saucer.",
            image: "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg"
          }
        ],
        bestTimeToVisit: [
          {
            season: "Winter",
            months: "November to February",
            description: "Pleasant temperatures with cool evenings. Ideal for temple tours, cultural experiences, and exploring cities."
          },
          {
            season: "Summer",
            months: "March to May",
            description: "Hot in the plains but perfect for visiting hill stations like Ooty and Kodaikanal, which offer a cool retreat."
          },
          {
            season: "Monsoon",
            months: "June to September",
            description: "Moderate rainfall brings greenery to the landscape. Good time to visit with fewer tourists, though some outdoor activities may be limited."
          }
        ],
        eco: {
          tips: [
            "Choose homestays in the Western Ghats that follow sustainable tourism practices",
            "Visit organic farms in the Nilgiris that maintain traditional farming methods",
            "Support handicraft centers that use natural dyes and sustainable materials",
            "Take heritage walks instead of vehicle tours in temple towns",
            "Participate in sea turtle conservation efforts along the coast"
          ],
          spots: [
            {
              name: "Mukurthi National Park",
              description: "A protected shola grassland ecosystem with community-based conservation efforts and regulated tourism."
            },
            {
              name: "Gulf of Mannar Marine National Park",
              description: "A biosphere reserve with coral reefs, seagrass beds, and mangroves, offering eco-friendly boat tours."
            }
          ]
        }
      }
    };
  
    // Default to Rajasthan if the state is not found in our mock data
    return stateDataMap[state] || stateDataMap["Rajasthan"];
  };