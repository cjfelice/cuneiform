Image.destroy_all
User.destroy_all
Canvase.destroy_all
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create!( name: 'Artemis', email: 'test@gmail.com',  password: 'testpassword', location: 'Toronto')
user2 = User.create!( name: 'Tyler', email: 'itychi@gmail.com', password: 'tylerpassword', location: 'Berlin')
user3 = User.create!( name: 'Lily', email: 'maggie@gmail.com', password: 'maggiepassword' ,location: 'Dubai')
user4 = User.create!( name: 'George', email: 'george@gmail.com', password: 'georgepassword' ,location: 'Lagos')
user5 = User.create!( name: 'Neda', email: 'neda@gmail.com', password: 'nedapassword' ,location: 'Singapore')
user6 = User.create!( name: 'Momo', email: 'momo@gmail.com', password: 'momopassword' ,location: 'Vancouver')

canvase1 = Canvase.create!(name: 'Test', music_id: '', description: 'Walk in the park', user_id: user1.id)

image1 = Image.create!(image_url: 'https://c.pxhere.com/photos/81/db/autumn_forest_autumn_forest_trees_leaves_sunbeam_nature_sunlight-967621.jpg!d', canvase_id: canvase1.id, user_id: user1.id)


canvase2 = Canvase.create!(name: 'Test', music_id: '', description: 'Yangmingshan Taipei Chinese Pavilion!', user_id: user2.id)


image2 = Image.create!(image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Yangmingshan_Taipei_Chinese_Pavilion.jpg', canvase_id: canvase2.id, user_id: user2.id)


canvase3 = Canvase.create!(name: 'Test', music_id: '', description: 'City of Stars', user_id: user3.id)

image3 = Image.create!(image_url: 'https://static.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg', canvase_id: canvase3.id, user_id: user3.id)

canvase4 = Canvase.create!(name: 'Test', music_id: '', description: 'So this is where bread comes from', user_id: user4.id)

image4 = Image.create!(image_url: 'https://get.pxhere.com/photo/landscape-nature-grass-branch-light-sky-sun-fog-sunrise-sunset-mist-field-grain-sunlight-morning-dawn-summer-dusk-evening-harvest-autumn-fields-mood-arable-atmospheric-phenomenon-grass-family-642150.jpg', canvase_id: canvase4.id, user_id: user4.id)

canvase5 = Canvase.create!(name: 'Test', music_id: '', description: 'Beauty is everywhere', user_id: user5.id)

image5 = Image.create!(image_url: 'https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg', canvase_id: canvase5.id, user_id: user5.id)



canvase6 = Canvase.create!(name: 'Test', music_id: '', description: 'Wet Road', user_id: user6.id)

image6= Image.create!(image_url: 'https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg', canvase_id: canvase6.id, user_id: user6.id)

canvase7 = Canvase.create!(name: 'Test', music_id: '', description: 'Taipei 101', user_id: user1.id)

image7= Image.create!(image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Taipei_101_2008_NewYear_Firework.jpg', canvase_id: canvase7.id, user_id: user1.id)

canvase8 = Canvase.create!(name: 'Test', music_id: '', description: 'Sunset', user_id: user2.id)

image8= Image.create!(image_url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Burning_Yellow_Sunset.jpg', canvase_id: canvase8.id, user_id: user2.id)

canvase9 = Canvase.create!(name: 'Test', music_id: '', description: 'Taiwan', user_id: user3.id)

image9= Image.create!(image_url: 'http://res.cloudinary.com/deaiyjjnf/image/upload/v1512081460/orsdiipmsn7e8vargxhg.jpg', canvase_id: canvase9.id, user_id: user2.id)

canvase10 = Canvase.create!(name: 'Test', music_id: '', description: 'Captivated', user_id: user4.id)

image10= Image.create!(image_url: 'https://images.pexels.com/photos/159020/sunset-sky-afterglow-evening-sky-159020.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', canvase_id: canvase10.id, user_id: user4.id)

canvase11 = Canvase.create!(name: 'Test', music_id: '', description: 'Flowers', user_id: user5.id)

image11= Image.create!(image_url: 'https://static.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg', canvase_id: canvase11.id, user_id: user3.id)

canvase12 = Canvase.create!(name: 'Test', music_id: '', description: 'Brilliant Sunset', user_id: user6.id)

image12= Image.create!(image_url: 'http://maxpixel.freegreatpicture.com/static/photo/2x/Colors-Dusk-Turkey-Clouds-Sky-Beautiful-Sunset-1985086.jpg', canvase_id: canvase12.id, user_id: user5.id)

canvase13 = Canvase.create!(name: 'Test', music_id: '', description: 'So cold but so good!', user_id: user3.id)

image13= Image.create!(image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6xOBJiOyYKKtlz7VuHtw7uhZvmhMVkwExV3h--YH6WynPQFj', canvase_id: canvase13.id, user_id: user5.id)

canvase14 = Canvase.create!(name: 'Test', music_id: '', description: 'Fire in the sky', user_id: user4.id)

image14= Image.create!(image_url: 'https://c1.staticflickr.com/8/7512/16172098986_6df4e49a5f_b.jpg', canvase_id: canvase14.id, user_id: user6.id)


canvase15 = Canvase.create!(name: 'Test', music_id: '', description: 'Light up the sky', user_id: user1.id)

image15= Image.create!(image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/1_epcot_illuminations_2010.jpg', canvase_id: canvase15.id, user_id: user6.id)



canvase16 = Canvase.create!(name: 'Test', music_id: '', description: 'After a 10 mile hike', user_id: user4.id)

image16= Image.create!(image_url: 'http://maxpixel.freegreatpicture.com/static/photo/2x/Mountain-Sky-Clouds-Miscanthus-A-Surname-Taiwan-1117008.jpg', canvase_id: canvase16.id, user_id: user1.id)

canvase17 = Canvase.create!(name: 'Test', music_id: '', description: 'Stalking its prey', user_id: user6.id)

image17= Image.create!(image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg', canvase_id: canvase17.id, user_id: user1.id)

canvase18 = Canvase.create!(name: 'Test', music_id: '', description: 'Finding something to chew on...', user_id: user1.id)

image18= Image.create!(image_url: 'https://static.pexels.com/photos/145994/pexels-photo-145994.jpeg', canvase_id: canvase18.id, user_id: user1.id)

canvase19 = Canvase.create!(name: 'Test', music_id: '', description: 'Lights on the water', user_id: user3.id)

image19= Image.create!(image_url: 'https://get.pxhere.com/photo/water-light-night-atmosphere-river-swim-love-evening-orange-pile-reflection-red-collection-color-romance-darkness-yellow-lighting-heat-long-exposure-festival-lights-candles-design-symmetry-mood-shape-candlelight-many-ulm-festival-of-lights-agglomeration-floating-candles-lights-serenade-1018806.jpg', canvase_id: canvase19.id, user_id: user3.id)

canvase20 = Canvase.create!(name: 'Test', music_id: '', description: 'Festival of lights', user_id: user4.id)

image20= Image.create!(image_url: 'https://static.pexels.com/photos/145994/pexels-photo-145994.jpeg', canvase_id: canvase20.id, user_id: user4.id)

canvase21 = Canvase.create!(name: 'Test', music_id: '', description: 'Flight over Hawaii', user_id: user5.id)

image21= Image.create!(image_url: 'https://static.pexels.com/photos/221385/pexels-photo-221385.jpeg', canvase_id: canvase21.id, user_id: user4.id)
