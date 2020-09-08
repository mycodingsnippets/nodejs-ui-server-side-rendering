module.exports = {
    'bulma': (req, res) => {
        res.render('pages/reference/bulma',{
            title: 'Bulma',
            styles: [
                '/css/font-awesome.css',
                '/css/bulma/bulma.css',
                // 'css/utils/_global.css'
            ],
            scripts: []
        })
    },
    //We can include component wise css also for Semantic UI as well as prepare own theme by compiling
    'semantic': (req, res) => {
        res.render('pages/reference/semantic',{
            title: 'Semantic',
            styles: [
                '/css/semanticui/semantic.min.css',
                // 'css/utils/_global.css'
            ],
            scripts: [
                '/js/jquery.min.js',
                '/js/semanticui/semantic.min.js'
            ]
        })
    }
};