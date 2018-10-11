# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Note.destroy_all

becci= User.create(username: "Becci", password:"Becci123", bio: "student", avatar: nil)

Note.create(title: "Hello World", content: "Saying Hello to The World", location: "Houston, TX", user: becci)
Note.create(title: "Good Night", content: "Saying Good Night To The World", location: "Houston, TX", user: becci)
