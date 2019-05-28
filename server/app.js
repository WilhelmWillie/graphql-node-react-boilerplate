const express = require('express')

const app = express()

// Start our server
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`🚀 Server live on port ${port}`)
})
