const { Router } = require('express')
const ListItem = require('../models/item')
const router = Router()

router.get('/', async (req, res) => {
	const groceries = await ListItem.find({}).lean()

	res.render('index', {
		title: 'Grocery List',
		isIndex: true,
		groceries
	})

})

router.get('/add', (req, res) => {
	res.render('add', {
		title: 'Add New Item',
		isCreate: true
	})
})

router.post('/add', async (req, res) => {
	const item = new ListItem({
		title: req.body.title
	})

	await item.save()
	res.redirect('/')
})

router.post('/complete', async (req, res) => {
	const item = await ListItem.findById(req.body.id)

	item.completed = !!req.body.completed
	await item.save()

	res.redirect('/')
})

module.exports = router