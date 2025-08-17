export async function POST(req: Request){
  const body = await req.json()
  
  // Add timestamp and ID to the submission
  const submission = {
    ...body,
    id: Date.now().toString(),
    timestamp: new Date().toISOString()
  }
  
  // Store in localStorage (in a real app, this would go to a database)
  // Note: This is a simplified approach for demo purposes
  if (typeof window !== 'undefined') {
    const existingLeads = localStorage.getItem('leadSubmissions') || '[]'
    const leads = JSON.parse(existingLeads)
    leads.push(submission)
    localStorage.setItem('leadSubmissions', JSON.stringify(leads))
  }
  
  const url = process.env.HIGHLEVEL_WEBHOOK_URL
  if(!url) return Response.json({ ok:false, error:'Missing HIGHLEVEL_WEBHOOK_URL' }, { status: 500 })
  
  try {
    await fetch(url, { 
      method:'POST', 
      headers:{ 'Content-Type':'application/json' }, 
      body: JSON.stringify(submission) 
    })
    return Response.json({ ok:true })
  } catch (error) {
    console.error('Error sending to webhook:', error)
    return Response.json({ ok:false, error:'Failed to send to webhook' }, { status: 500 })
  }
}
