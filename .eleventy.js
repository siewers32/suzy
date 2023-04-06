const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const path = require('path');
const fs = require('fs');
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const { eleventyImagePlugin } = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("pages", function(collection) {
        const coll = collection.getFilteredByTag("pages");

        for(let i = 0; i < coll.length ; i++) {
            const prevPost = coll[i-1];
            const nextPost = coll[i + 1];

            coll[i].data["prevPost"] = prevPost;
            coll[i].data["nextPost"] = nextPost;
        }

        return coll;
    });

    eleventyConfig.addPlugin(pluginWebc, {
        components: [
            "src/_components/*.webc",
            "npm:@11ty/eleventy-img/*.webc"
        ]      
    });

    eleventyConfig.addPlugin(eleventyImagePlugin, {
		// Set global default options
		formats: ["webp", "jpeg", "svg"],
		urlPath: "/_assets/",
        svgShortCircuit: true,
        svgAllowUpscale: true,

		// Notably `outputDir` is resolved automatically
		// to the project output directory

		defaultAttributes: {
			loading: "lazy",
			decoding: "async"
		}
	});


    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);


    eleventyConfig.addFilter("getPostsByAuthor", (posts, author) => {	
        return posts.filter(p => {
            authorstxt = p.data.author + '';
            authors = authorstxt.split(',');
            trimmed = authors.map(a => a.trim())
            return (trimmed.includes(author)) ?  true :  false;
        })
	});

    eleventyConfig.addFilter("getObj", (keys, objs) => {
        keyobjs = objs.filter(c => keys.includes(c.key))
        let sortedkeys = []
        let foundObj = {}
        if(keyobjs.length > 0) {
            keys.forEach(k => {
                (foundObj = keyobjs.find(obj => obj.key == k)) ? sortedkeys.push(foundObj) : false;
            })
        }
        return sortedkeys
    })

    eleventyConfig.addFilter("getOnlyPosts", (posts, labels) => {
        mylabels = (labels + '').split(', ')
        trimmedlabels = mylabels.map(a => a.trim())
        filteredposts = posts.filter(p => {
            datacomplete = 0
            trimmedlabels.forEach(l => {       
                datacomplete += (p.data[l]) ? 1 : 0;

            })
            return datacomplete == trimmedlabels.length
        })
        return filteredposts
    })

    eleventyConfig.addShortcode("newdate", () => {
            let d  = new Date()
            let m = '' + (d.getMonth() + 1)
            let day = '' + (d.getDate())
            let y = '' + d.getFullYear()
            console.log([y, m, day].join('-'))
            return [y, m, day].join('-') 
    });

    eleventyConfig.addFilter("getNewKey", (objs) => {
        let keys = []
        objs.forEach(obj => keys.push(obj.data.key))
        return (Math.max(...keys) + 1)
    })

    eleventyConfig.addFilter("getPostsByTechnology", (posts, technology) => {	
        return posts.filter(p => {
            pagetechnologytxt = p.data.technology + '';
            pagetechnologies = pagetechnologytxt.split(',');
            pagetrimmed = pagetechnologies.map(a => a.trim())
            return (pagetrimmed.includes(technology)) ?  true :  false;
        })
	});

    eleventyConfig.addFilter("getPostsByKeys", (posts, keys) => {

        x = posts.filter(p => {
            return (p.data.key) ? keys.includes(p.data.key) : false;
        })
        items = []
        keys.forEach(key =>
            items.push(x.find(item => item.data.key == key))
        );
        return items
	});

    eleventyConfig.addFilter("getAssignments", (posts, assignments) => {
        let asstypes = Object.keys(assignments)
        let postobjects = {}
        let sorteditems = []
        asstypes.forEach(key => {
            filteredposts = posts.filter(p => {
                return (p.data.key) ? assignments[key].includes(p.data.key) : false;
            })
            sorteditems[key] = []
            assignments[key].forEach(k =>
                sorteditems[key].push(filteredposts.find(p => p.data.key == k))
            );          
            postobjects[key] = sorteditems[key]
        })
        return postobjects
	});
    
    eleventyConfig.addFilter("postsAscending", (collection) => {
        return collection.sort((a,b) => {
            // console.log(a.data.page.inputPath)
            if (a.data.page.inputPath > b.data.page.inputPath) return 1;
            else if (a.data.page.inputPath < b.data.page.inputPath) return -1;
            else return 0;
        })
    });


    eleventyConfig.addFilter('toArray', (text) => {
        thetxt = text + ''
        let myarray = thetxt.split(',')
        trimmed = myarray.map(a => a.trim())
        return trimmed
    });


    eleventyConfig.addFilter("getAuthors", (authors, author) => {
        authortxt = author + ''
		let myauthors  = authortxt.split(',');
        trimmed = myauthors.map(a => a.trim())
        theauthors =  authors.filter(a => trimmed.includes(a.key));
        authornames = theauthors.map(a => a.name)
        return authornames.join(', ')
	});

    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addFilter("pepperoni", function(color) {
        return `/_assets/${color}_pepper.svg`;
    });

    eleventyConfig.addFilter("dir", function(url){
        parts = url.split('/')
        let mypath = ""
        for (i = 0; i < 2; i++) {
            mypath += "/";
            mypath += parts[i];
          }
        return mypath
    });

    eleventyConfig.addFilter("image", function(url, alt, size){
        return `<img src="${url}" alt="${alt}" style="width:${size}%;">`;  
    })

    eleventyConfig.addFilter("author", function(date, name){
        return `<div class="author">${name} | ${date}</div>`;
        
    })
 
 
    eleventyConfig.addPlugin(syntaxHighlight);
    
    // eleventyConfig.addPassthroughCopy("./src/_css");
    // eleventyConfig.addPassthroughCopy("./src/_assets");
    // eleventyConfig.addPassthroughCopy("./src/_js");
    eleventyConfig.addPassthroughCopy("./manifest.json");

    eleventyConfig.addShortcode("video", (yt_id) => {
        const filePath = path.join(__dirname, "./src/_includes/video.njk");
        // If the file doesn't exist, render nothing.
        if (!fs.existsSync) {
            return "";
        }
        // If the file does exist, read it.
        const content = fs.readFileSync(filePath).toString();
        return nunjucks.renderString(content, {video: yt_id});
    });

    return {
        pathPrefix: "/",
        dir: {
            input: "src",
            output: "docs",
        },
    };
};



