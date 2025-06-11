import {drizzle} from "drizzle-orm/neon-http"
import {neon} from "@neondatabase/serverless"
import * as fs from "fs"
import * as path from "path"

// Custom function to load environment variables from .env.local
function loadEnvFile() {
  try {
    const envPath = path.resolve(process.cwd(), '.env.local')
    const envContent = fs.readFileSync(envPath, 'utf-8')
    
    envContent.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
      if (match) {
        const key = match[1]
        let value = match[2] || ''
        
        // Remove surrounding quotes if they exist
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1)
        }
        
        if (!process.env[key]) {
          process.env[key] = value
        }
      }
    })
  } catch (error) {
    console.error('Error loading .env.local file:', error)
  }
}

// Load environment variables
loadEnvFile()

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql)

export {db}