export const users = [
    { id:1, name: "John Doe"},
    { id:2, name: "Jane Doe"},
]

export async function GET(){
    return Response.json(users);
}

export async function POST(request: Request){
    const user = await request.json();
    const newUser = {
        id: users.length + 1,
        name: user.name,
    }
    users.push(newUser);
    return Response.json(users);
}