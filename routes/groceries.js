const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
	res.render('index', {
		title: 'Grocery List'
	})
})

router.get('/create', (req, res) => {
	res.render('create', {
		title: 'Create New List'
	})
})

module.exports = router