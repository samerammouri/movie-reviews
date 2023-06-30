import mongodb from 'mongodb'
import dotenv from 'dotenv'
import app from './server.js'

async function main() {
    dotenv.config()
    const port = process.env.PORT || 8000
    const dbUri = process.env.MOVIEREVIEW_DB_URI
    const client = new mongodb.MongoClient(dbUri)
    try {
        await client.connect()
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    }
    catch (err) {
        console.error(err)
        process.exit(1)
    }
}

main().catch(console.error);
