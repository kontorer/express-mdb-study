const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')

const groceryRoutes = require('./routes/groceries')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(groceryRoutes)


async function start() {
	try {
		await mongoose.connect('mongodb+srv://admin:testadmin@cluster0.6jnz4.mongodb.net/groceries', {
			useNewUrlParser: true,
			useFindAndModify: false
		})
		app.listen(PORT, () => {
			console.log('Server has been deployed')
		})
	} catch (e) {
		console.log('Error: ', e)
	}
}




start()