//  Title : uptime Monitoring Appplication 
//   description : A restfull api to monitor up or down time of user defined link 
//   author: sumit shaha (learn with sumit)
//   date : 23 / 5 /2023 


// const http = require('http');
// const url = require('url')
// const app = {};
// app.config = {
//   port:3000
// };

// app.createServer = ()=>{
//   const server = http.createServer(app.handleReqRes)
//   server.listen(app.config.port,()=>{
//     console.log(`lising to port ${app.config.port}`)
//   })
// }

// // handleRequst and resupons  
// app.handleReqRes =(req,res)=>{
//   const parsedUrl = url.parse(req.url,true)
//    const path = parsedUrl.pathname;
//    const trimedPath = path.replace(/^\/+|\/+$/g,'');
//    const method = req.method.toLowerCase();
//    const queryStirenObj = parsedUrl.query;
//    const headersObj = req.headers;
//    console.log(headersObj)
//    console.log(parsedUrl.query)
//    console.log(trimedPath)
    
//   res.end('hellow world')
// }

// app.createServer();


// const express = require('express');
// const app = express();

//  app.get('/',(req,res)=>{
//   res.send("hellow")
//  })

// app.listen(300,()=>{
//   console.log('success')
// })



// const express = require('express');
// const app = express();
// // app.use(express.urlencoded())
// const router  = express.Router()
// app.use(router)
// // app.use(express.static(__dirname + '/public/'))

// router.get('/admin',(req,res)=>{
//   // console.log(req.body)
//   res.send('I am firs aouter');
//   res.end()
// })
// router.get('/loacl',(req,res)=>{
//   res.send('Ami gonagoar')
// })
// app.listen(3000,()=>{
//   console.log('hellow')
// })

// const express = require('express')
// // const handle = require('./handle')
// const app = express();
// const admin = express()

// it works like varible 
// app.locals.title = 'My app';
// admin.get('/dashborde',(req,res)=>{
//   console.log(admin.mountpath)
//   res.send('i am admin')
//   console.log('admind')
//   res.end()
// })

// app.get('/',(req,res)=>{
//   // console.log(app.locals.title)
//   res.send('local')
// })
// app.use('/admin',admin)
// app.listen(3000,()=>{
//   console.log(`server is running on port ${3000}`)
// })


// const expree = require('express');
// const app = expree();
// const admin = expree()


// admin.get('/deshbord',(req,res)=>{
//   res.send('i am admin and dashbord')
 
// })
// app.get('/',(req,res)=>{
//   res.send(' i am local app')
//   // console.log('hell')
//   res.end();
// })

// admin.use('/admin',admin)

// app.listen(3000,()=>{
//   console.log('succes')
// })


// const expree = require('express');
//  const app = expree();

// //  app.enable('case sensitive routing')
// app.param('id',(req,res,next,id)=>{
   
//   const user = {
//     userId : id,
//     name: "bangaldesh"
//   }
//   req.UserDetails = user;
//   next();
// })

//  app.get('/user/:id',(req,res)=>{
//   console.log(req.UserDetails.name)
//   res.send('weolcom to bangaldesh')
//   res.end()
//  })
// // app.all('/about',(req,res)=>{
// //   res.send('welcome');
// //   res.end();
// // })

// app.listen(3000)

 
// const expree = require('express');
// const app = expree();

// app.get('/',(req,res)=>{
//  console.log('howl');
//  res.end();
// })
// // app.listen(3000)


// const expree = require('express');
//  const app = expree();
//  const adminRouter = expree.Router();
//   adminRouter.get('/dashbord',(req,res)=>{
//     console.log(req.baseUrl)
//      res.send("welcom to in admin dahsbord")
//   })

//   app.use('/admin',adminRouter)

//  app.route('/about/mession')
//     .get((req,res)=>{
//         console.log(req.baseUrl);
//         res.end();
//        })

//  app.get('/',(req,res)=>{
//   console.log('howl');
//   res.end();
//  })
//  app.listen(3000)


// const express = require('express');
// const cookiparser = require('cookie-parser');
// const e = require('express');
// const app = express();
// const adminRouter = express.Router();

 
 
//  const logger = (req,res,next)=>{
//     console.log(`${new Date(Date.now()).toLocaleString()} 
//     - ${req.method} - ${req.originalUrl} - ${req.protocol}
//      - ${req.ip}`)
//       throw new Error("this is an erorr") 
//    }
//    adminRouter.use(logger)
//   adminRouter.get('/dashbord',(req,res)=>{
//    res.send('Dahsbord')
//   })
// app.get('/about',(req,res)=>{
//    res.send('About');
// })
// const errorMiddleWare = (err,req,res,next)=>{
//    console.log(err.message);
//    res.status(500).send('ther was a server side error')
// }
// adminRouter.use(errorMiddleWare)
// app.use('/admin',adminRouter)
// app.listen(3000,()=>{
//    console.log('listening on port 3000')
// })

// const express = require('express');
// const rounter = require('./adminRounter')
// const publicRouter = require('./publicRouter');
// const app = express();
 
// publicRouter.param('user',(req,res,next,id)=>{
//    req.user = id === '1' ?'admin':'anonymous'
//    console.log('i am called once')
// })
// publicRouter.get('/:user',(req,res,next)=>{
//    console.log('this also mathes');
//    next()
// })

// app.use('/',publicRouter)
// app.use('/admin',rounter)
// app.listen(3000)

 
// const express = require('express');
// const mongoose = require('mongoose')
// const todoHandler = require('./routeHandler/todoHandler')
// // express app initialization
// const app = express();
 

// app.use(express.json());

// mongoose.connect('mongodb://localhost/todos',{useNewUrlParser:true,useUnifiedTopology:true})
//         .then(()=>console.log('connection successful'))
//         .catch(err => console.log(err))
// /// application Routes

// app.use('/todo',todoHandler)
// //default error handler

// // function errorHandler(err,req,res,next)=>{
// //    if(res.h)
// // }


// app.listen(3000,()=>{
//    console.log('app listening at port 3000')
// })

// const express = require('express')
// var bodyParser = require('body-parser')
// const app = express();
// const PORT = 3001;

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
//  app.get('/register',(req,res)=>{
//         console.log(1)
//         res.sendFile(__dirname + '/index.html')
//  })
//  app.post('/register',(req,res)=>{
//         console.log(3)
//         const fullName = req.body.fullName;
//         const year = req.body.year;
      

//         console.log(`your full name is ${fullName} and age ${year}`)
//         res.send('helllow')
      
//  })
// app.listen(PORT,()=>{
//         console.log(`server is running at http://localhost:${PORT}`)
// })


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
        res.sendFile(__dirname+'/index.html');
})
app.get('/circle',(req,res)=>{
        res.sendFile(__dirname+'/circle.html')
})
app.get('/triangle',(req,res)=>{
        res.sendFile(__dirname+'/triangle.html')
})
app.post('/triangle',(req,res)=>{
        const height = req.body.height;
        const base = req.body.base;
        const area = 0.5*base*height;
        res.send(`<h2> Area of Triangle is : ${area} </h2>`)
})
app.post('/circle',(req,res)=>{
        const radius = req.body.radius;
        const area = Math.PI*radius*radius;
        res.send(`<h2> Area of circle is : ${area} </h2>`)
})

app.listen(PORT,()=>{
        console.log(`server is runnig at http://localhost:${PORT}`)
})