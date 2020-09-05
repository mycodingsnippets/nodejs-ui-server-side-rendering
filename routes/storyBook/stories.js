const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../../middlewares/storyBookAuth');
const { commonCss, commonJs } = require('../../data/storyBook/externalFilesKit');
const Story = require('../../models/storyBook/Story');

// @desc  Show add page
// @route GET /stories/add
router.get('/stories/add', ensureAuth, (req, res) => {
    res.render('pages/storyBook/add', {
        title: 'Add Stories',
        styles: [
            ...commonCss
        ],
        scripts: [
            ...commonJs
        ]
    });
});

// @desc  Process add form
// @route POST /stories
router.post('/stories', ensureAuth, async (req, res) => {
    try{
        req.body.user = req.user.id;
        await Story.create(req.body);
        res.redirect('/story-book/dashboard');
    }catch (e) {
        console.error(e);
        res.render('pages/storyBook/error/500');
    }
});

// @desc  Show all Stories
// @route GET /stories
router.get('/stories', ensureAuth, async (req, res) => {
    try{
        const stories = await Story.find({
                status: 'public'
            })
            .populate('user')
            .sort({
                createdAt: 'desc'
            })
            .lean();

        res.render('pages/storyBook/index',{
            title: 'Stories',
            styles: [
                ...commonCss
            ],
            scripts: [
                ...commonJs
            ],
            stories
        });
    }catch (e) {
        console.error(e);
        res.render('pages/storyBook/error/500');
    }
});

module.exports = router;