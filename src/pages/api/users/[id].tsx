import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  //const id = request.query.
  console.log(request.query);
  
  const users = [
    { id: 1, name: 'Mateus' },
    { id: 2, name: 'Leo' },
    { id: 3, name: 'Gui' },
  ]

  return response.json(users)
}