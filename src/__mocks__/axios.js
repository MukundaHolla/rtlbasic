const mockResonse = {
    data: {
        results: [
            {
                name: {
                    first: "Laith",
                    last: "Harb"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/thumb/men/27.jpg"
                },
                login: {
                    usename: "RandomData"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResonse)
}