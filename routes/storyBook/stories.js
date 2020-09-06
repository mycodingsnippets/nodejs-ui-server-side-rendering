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
        res.render('pages/storyBook/error/500', {
            title: 'Server Error',
            styles: commonCss,
            scripts: commonJs
        });
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
        res.render('pages/storyBook/error/500', {
            title: 'Server Error',
            styles: commonCss,
            scripts: commonJs
        });
    }
});

// @desc  Show edit page
// @route GET /stories/edit/:id
router.get('/stories/edit/:id', ensureAuth, async (req, res) => {
    try {
        const story = await Story.findOne({
            _id: req.params.id
        }).lean();

        if (!story) {
            return res.render('pages/storyBook/error/404', {
                title: 'Not Found',
                styles: commonCss,
                scripts: commonJs
            });
        }

        if (story.user.toString() !== req.user.id.toString()) {
            res.redirect('/story-book/stories');
        } else {
            res.render('pages/storyBook/edit', {
                title: 'Edit',
                styles: commonCss,
                scripts: commonJs,
                story
            })
        }
    }catch (e) {
        console.error(err);
        return res.render('pages/storyBook/error/500', {
            title: 'Server Error',
            styles: commonCss,
            scripts: commonJs
        });
    }
});

// @desc  Update Story
// @route PUT /stories/:id
router.put('/stories/:id', ensureAuth, async (req, res) => {
    try {

        let story = await Story.findById(req.params.id).lean();
        if (!story) {
            return res.render('pages/storyBook/error/404', {
                title: 'Not Found',
                styles: commonCss,
                scripts: commonJs
            });
        }
        if (story.user.toString() !== req.user.id.toString()) {
            res.redirect('/story-book/stories');
        } else {
            story = await Story.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true});
            res.redirect('/story-book/dashboard');
        }
    }catch (e) {
        console.error(err);
        return res.render('pages/storyBook/error/500', {
            title: 'Server Error',
            styles: commonCss,
            scripts: commonJs
        });
    }
});

// @desc  Delete Story
// @route DELETE /story/:id
router.delete('/stories/:id', ensureAuth, async (req, res) => {
    try{
        await Story.remove({_id: req.params.id});
        res.redirect('/story-book/dashboard');
    }catch(err){
        console.error(err);
        return res.render('pages/storyBook/error/500', {
            title: 'Server Error',
            styles: commonCss,
            scripts: commonJs
        });
    }
});

//@desc  Show single story
//@route GET /stories/:id
router.get('/stories/:id', ensureAuth, async (req, res) => {
    try{
        let story = await Story.findById(req.params.id)
            .populate('user')
            .lean();

        if (!story) {
            return res.render('pages/storyBook/error/404', {
                title: 'Not Found',
                styles: commonCss,
                scripts: commonJs
            });
        }

        res.render('pages/storyBook/view', {
            title: 'View Story',
            styles: [
                ...commonCss
            ],
            scripts: [
                ...commonJs
            ],
            story
        });
    }catch (e) {
        console.error(e);
        return res.render('pages/storyBook/error/500', {
            title: 'Server Error',
            styles: commonCss,
            scripts: commonJs
        });
    }
});

// @desc  User stories
// @route GET /stories/user/:userId
router.get('/stories/user/:userId', ensureAuth, async (req, res) => {
    try{
        const stories = await Story.find({
            user: req.params.userId,
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
        res.render('pages/storyBook/error/500', {
            title: 'Server Error',
            styles: commonCss,
            scripts: commonJs
        });
    }
});

module.exports = router;